import Card from './Card';
import Container from '../Shared/Container';
import axios from 'axios';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../Shared/LoadinSpinner';

const categories = [
  'Smartphones',
  'Feature Phones',
  'Phone Cases & Covers',
  'Screen Protectors',
  'Mobile Holders & Mounts',
  'Laptops',
  'Desktop PCs',
  'Monitors',
  'Keyboards & Mice',
  'External Hard Drives & SSDs',
  'Printers & Scanners',
  'USB Hubs & Cables',
  'Earphones (Wired & Wireless)',
  'Headphones',
  'Bluetooth Speakers',
  'Smart Glasses',
  'VR Headsets',
  'DSLRs & Mirrorless Cameras',
  'Action Cameras',
  'Security Cameras',
  'Camera Tripods & Accessories',
  'Smart TVs',
  'LED & OLED TVs',
  'Soundbars & Home Theaters',
  'Streaming Devices',
  'Projectors',
  'Power Banks',
  'Fast Chargers',
  'Wireless Chargers',
  'Charging Cables',
  'Smart Lights & Bulbs',
  'Car Gadgets',
  'Smart Pens & Notebooks',
  'Sharee',
  '3pc set',
  'Punjabi',
  'Shirt',
  'Pant',
  'Toys',
  'Food',
  'Groceries',
  'Homemade Food',
  'Regional Food',
  'Fish',
  'Others',
];

const Meds = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/medicines`
        );
        setMedicines(data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const filteredMedicines =
    selectedCategory === 'All'
      ? medicines
      : medicines.filter(med => med.category === selectedCategory);

  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);

  const currentData = filteredMedicines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen rounded-md shadow-lg py-8">
      <Container>
        <h2 className="text-center font-black text-3xl sm:text-4xl md:text-5xl mt-4">
          Discover Our Best Deals
        </h2>
        <p className="text-center text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 px-4">
          Grab top products at unbeatable prices! Enjoy exclusive discounts and
          limited-time offers tailored just for you. Shop now before they're
          gone!
        </p>

        {/* Category Filter */}
        <div className="flex justify-center items-center gap-4 mt-8 mb-4 flex-wrap px-4">
          <select
            value={selectedCategory}
            onChange={e => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border rounded-md bg-white shadow"
          >
            <option value="All">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setCurrentPage(1);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Reset Filter
          </button>
        </div>

        {currentData.length > 0 ? (
          <>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentData.map(medicine => (
                <Card key={medicine._id} medicine={medicine} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === i + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage(prev => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-center mt-12 text-gray-500">No Data To Show</p>
        )}
      </Container>
    </div>
  );
};

export default Meds;
