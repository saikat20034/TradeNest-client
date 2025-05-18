/* eslint-disable react/prop-types */
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../Form/CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PurchaseModal = ({ closeModal, isOpen, medicine, refetch }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { name, quantity, price, category, seller, _id } = medicine;
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);
  const [deliveryOption, setDeliveryOption] = useState('insideCampus');

  const [purchaseInfo, setPurchaseInfo] = useState({
    customer: {
      name: user.displayName || '',
      email: user.email || '',
      image: user.photoURL || '',
    },
    seller: seller?.email,
    medId: _id,
    quantity: totalQuantity,
    price: totalPrice,
    deliveryOption: 'Inside Campus',
    address: '',
    status: 'pending',
  });

  const handleQuantity = value => {
    if (value > quantity) {
      setTotalQuantity(quantity);
      return toast.error('Quantity Exceeds Available Quantity');
    }
    if (value <= 0) {
      setTotalQuantity(1);
      return toast.error('Quantity Cannot Be Less Than 1');
    }
    setTotalQuantity(value);
    const updatedPrice = value * price + deliveryCharge;
    setTotalPrice(updatedPrice);
    setPurchaseInfo(prv => ({
      ...prv,
      quantity: value,
      price: updatedPrice,
    }));
  };

  const handleDeliveryChange = option => {
    let charge = 0;
    let label = '';
    switch (option) {
      case 'insideCampus':
        charge = 0;
        label = 'Inside Campus';
        break;
      case 'insideTangail':
        charge = 50;
        label = 'Inside Tangail District';
        break;
      case 'allOverBangladesh':
        charge = 110;
        label = 'All Over Bangladesh';
        break;
      default:
        break;
    }
    setDeliveryOption(option);
    setDeliveryCharge(charge);
    const updatedPrice = totalQuantity * price + charge;
    setTotalPrice(updatedPrice);
    setPurchaseInfo(prv => ({
      ...prv,
      deliveryOption: label,
      price: updatedPrice,
    }));
  };

  const handlePurchase = async () => {
    const updatedPurchaseInfo = {
      ...purchaseInfo,
      customer: {
        name: user?.displayName || '',
        email: user?.email || '',
        image: user?.photoURL || '',
      },
    };

    try {
      await axiosSecure.post('/order', updatedPurchaseInfo);
      await axiosSecure.patch(`/medicines/quantity/${_id}`, {
        quantityToUpdate: totalQuantity,
        status: 'decrease',
      });
      toast.success('Order Successful');
      refetch();
      navigate('/dashboard/my-orders');
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative  z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed  inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 mt-14  overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Purchase
                </DialogTitle>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">Product : {name} </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Category: {category}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Customer: {user?.displayName}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm flex items-center text-gray-500">
                    Price per Unit: <FaBangladeshiTakaSign className="mx-1" />{' '}
                    {price}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Available Quantity: {quantity}
                  </p>
                </div>

                {/* Quantity input */}
                <div className="space-x-2 mt-2 text-sm">
                  <label htmlFor="quantity" className=" text-gray-600">
                    Quantity
                  </label>
                  <input
                    defaultValue={1}
                    max={quantity}
                    min={1}
                    onChange={e => handleQuantity(parseInt(e.target.value))}
                    className="w-48 px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                    name="quantity"
                    id="quantity"
                    type="number"
                    placeholder="Purchase quantity"
                    required
                  />
                </div>

                {/* Delivery option select */}
                <div className="space-y-1 mt-4 text-sm">
                  <label className="text-gray-600">Delivery Option</label>
                  <select
                    value={deliveryOption}
                    onChange={e => handleDeliveryChange(e.target.value)}
                    className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  >
                    <option value="insideCampus">Inside Campus (Free)</option>
                    <option value="insideTangail">
                      Inside Tangail District (+50৳)
                    </option>
                    <option value="allOverBangladesh">
                      All Over Bangladesh (+110৳)
                    </option>
                  </select>
                </div>

                {/* Address input */}
                <div className="space-x-3 mt-2 text-sm">
                  <label htmlFor="address" className=" text-gray-600">
                    Address
                  </label>
                  <input
                    className=" px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                    onChange={e => {
                      setPurchaseInfo(prv => ({
                        ...prv,
                        address: e.target.value,
                      }));
                    }}
                    name="address"
                    id="address"
                    type="text"
                    placeholder="Write Address here."
                    required
                  />
                </div>

                {/* Final total price */}
                <div className="mt-4">
                  <p className="text-md font-semibold text-gray-700 flex items-center">
                    Total Price: <FaBangladeshiTakaSign className="mx-1" />{' '}
                    {totalPrice}
                  </p>
                </div>

                {/* Checkout form */}
                <Elements stripe={stripePromise}>
                  <CheckOutForm
                    purchaseInfo={purchaseInfo}
                    totalQuantity={totalQuantity}
                    refetch={refetch}
                    closeModal={closeModal}
                  />
                </Elements>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PurchaseModal;
