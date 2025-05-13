import Card from './Card';
import Container from '../Shared/Container';
import axios from 'axios';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../Shared/LoadinSpinner';

const Meds = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 3 rows * 4 columns

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

  // Calculate total pages
  const totalPages = Math.ceil(medicines.length / itemsPerPage);

  // Slice data for current page
  const currentData = medicines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      <h2 className="text-center font-black text-3xl sm:text-4xl md:text-5xl mt-4">
        Discover Our Best Deals
      </h2>

      {currentData.length > 0 ? (
        <>
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentData.map(medicine => (
              <Card key={medicine._id} medicine={medicine} />
            ))}
          </div>

          {/* Pagination Controls */}
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
                  currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No Data To Show</p>
      )}
    </Container>
  );
};

export default Meds;
