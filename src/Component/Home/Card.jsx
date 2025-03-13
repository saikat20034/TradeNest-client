import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const Card = ({ medicine }) => {
  const { name, category, quantity, price, image, _id } = medicine || {};
  return (

    <Link
      to={`/medicine/${_id}`}
      className="col-span-1 cursor-pointer group shadow-lg bg-white/50 backdrop-blur-lg p-3 rounded-2xl border border-gray-300 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
    >
      <div className="flex flex-col gap-4 w-full">
        {/* Image Container */}
        <div className="aspect-square w-full h-[150px] relative overflow-hidden rounded-2xl">
          <img
            className="object-cover h-[150px] w-full rounded-2xl group-hover:scale-110 transition-transform duration-300"
            src={image}
            alt={name}
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h2 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {name.length > 30 ? name.slice(0, 30) + '...' : name}
          </h2>

          <p className="text-sm text-gray-600">
            Category:{' '}
            <span className="font-medium text-gray-700">{category}</span>
          </p>
          <p className="text-sm text-gray-600">
            Quantity:{' '}
            <span className="font-medium text-gray-700">{quantity}</span>
          </p>
          <div className="mt-3 text-2xl flex items-center font-bold justify-center text-blue-700">
            <FaBangladeshiTakaSign />
            {price.toFixed(2)}
          </div>
          <div>
            <button className='px-6 py-1 rounded-full mt-1 bg-green-400 text-white '>View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  medicine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;