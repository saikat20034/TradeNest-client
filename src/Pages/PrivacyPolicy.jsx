const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-md p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          🔒 Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center italic">
          Your privacy is our priority. Read about how we protect your personal
          data.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            🛡️ <strong>Data Protection:</strong> We use encryption and secure
            authentication.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            ❌ <strong>No Third-Party Sharing:</strong> We do not sell your
            data.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            📄 <strong>Your Rights:</strong> You can request data deletion
            anytime.
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
