import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
import UpdateMedModal from './../../Modal/UpdateMedModal';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const MedicineDataRow = ({ refetch, med }) => {
  const axiosSecure = useAxiosSecure()
  let [isOpen, setIsOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  const { _id, name, category, price, quantity, image } = med || {}
  const handleMedDelete = async () => {
    try {
      const { data } = await axiosSecure.delete(`/medicines/${_id}`)
      toast.success("Product Deleted Successfully")
      refetch()
      console.log(data);
    }catch(err){
      console.log(err);
      toast.error("Failed to delete product")
    } finally {
      closeModal()
    }
  }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{category}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{quantity}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={openModal}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-700 opacity-50 rounded-lg px-6 py-2'
          ></span>
          <span className='relative'>Delete</span>
        </span>
        <DeleteModal
          handleDelete={handleMedDelete}
          isOpen={isOpen} closeModal={closeModal} />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsEditModalOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-blue-700 opacity-50 rounded-lg py-3'
          ></span>
          <span className='relative '>Update</span>
        </span>
        <UpdateMedModal

          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </td>
    </tr>
  )
}

export default MedicineDataRow