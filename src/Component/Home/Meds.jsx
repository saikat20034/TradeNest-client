import Card from './Card';
import Container from '../Shared/Container';
import axios from 'axios';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../Shared/LoadinSpinner';

const Meds = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <Container>
      <h2 className="text-center font-black text-3xl sm:text-4xl md:text-5xl mt-4">
        Discover Our Best Deals
      </h2>

      {medicines && medicines.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
          {medicines.map(medicine => (
            <Card key={medicine._id} medicine={medicine} />
          ))}
        </div>
      ) : (
        <p>No Data To Show</p>
      )}
    </Container>
  );
};

export default Meds;
