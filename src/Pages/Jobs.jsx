import { Link } from 'react-router-dom';

const Jobs = () => {
  return (
    <div className="min-h-screenbg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-3xl mt-16 bg-white shadow-lg rounded-md p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          💼 Jobs
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center italic">
          We offer job opportunities for students and recent graduates. Explore
          various internship and part-time job roles!
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            🚀 <strong>Internships:</strong> Gain experience in real-world
            projects.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            💰 <strong>Part-Time Jobs:</strong> Work flexible hours and earn
            while studying.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            🌍 <strong>Remote Work:</strong> Find work-from-home opportunities
            suitable for students.
          </p>
        </div>
        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
