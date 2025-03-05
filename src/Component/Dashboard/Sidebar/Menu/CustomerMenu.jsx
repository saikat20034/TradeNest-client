import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItem'
import { useState } from 'react'
import BecomeSellerModal from './../../../Modal/BecomeSellerModal';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import toast from 'react-hot-toast';
const CustomerMenu = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const requestHandler = async () => {
    try {
      const { data } = await axiosSecure.patch(`/users/${user?.email}`)
      // console.log(data);
      toast.success('Request Sent Successfully')
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message)
    }
    finally {
      closeModal()
    }
  }

  return (
    <>
      <MenuItem icon={BsFingerprint} label='My Orders' address='my-orders' />

      <button
        onClick={() => setIsOpen(true)}
        className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
      >
        <GrUserAdmin className='w-5 h-5' />

        <span className='mx-4 font-medium'>Become A Seller</span>
      </button>

      <BecomeSellerModal
        closeModal={closeModal}
        requestHandler={requestHandler}
      isOpen={isOpen} />
    </>
  )
}

export default CustomerMenu