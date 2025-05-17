import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '../Shared/Button';
import './Checkoutform.css';

const CheckOutForm = ({ purchaseInfo, refetch, totalQuantity, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (purchaseInfo) {
      createPaymentIntent();
    }
  }, [purchaseInfo]);

  const createPaymentIntent = async () => {
    try {
      const { data } = await axiosSecure.post('/create-payment-intent', {
        quantity: purchaseInfo?.quantity,
        medId: purchaseInfo?.medId,
      });
      setClientSecret(data.clientSecret);
    } catch (error) {
      toast.error('Failed to initialize payment.');
      console.error(error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      toast.error('Stripe is not loaded.');
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      toast.error('Card element not found.');
      setProcessing(false);
      return;
    }

    const { error: methodError } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (methodError) {
      toast.error(methodError.message);
      setProcessing(false);
      return;
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: purchaseInfo?.customer?.name || 'Test User',
            email: purchaseInfo?.customer?.email || 'test@example.com',
          },
        },
      });

    if (confirmError) {
      toast.error(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      try {
        await axiosSecure.post('/order', {
          ...purchaseInfo,
          transactionId: paymentIntent.id,
        });

        await axiosSecure.patch(`/medicines/quantity/${purchaseInfo?.medId}`, {
          quantityToUpdate: totalQuantity,
          status: 'decrease',
        });

        toast.success('Test Payment Successful!');
        refetch();
        navigate('/dashboard/my-orders');
      } catch (err) {
        toast.error('Failed to store test order.');
        console.error(err);
      } finally {
        setProcessing(false);
        closeModal();
      }
    } else {
      toast.error('Payment was not successful.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#374151',
              '::placeholder': { color: '#a0aec0' },
            },
            invalid: { color: '#e53e3e' },
          },
        }}
      />
      <div className="mt-2 text-sm text-gray-500 bg-gray-100 rounded-lg p-3">
        💳 <strong>Use Test Card:</strong> 4242 4242 4242 4242
        <br />
        📆 Exp: Any future date
        <br />
        🔒 CVC: Any 3 digits
        <br />
        🧾 ZIP: Any 5 digits
      </div>
      <div>
        <Button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          label={
            processing ? 'Processing...' : `Pay Total ${purchaseInfo?.price} ৳`
          }
        />
      </div>
    </form>
  );
};

export default CheckOutForm;
