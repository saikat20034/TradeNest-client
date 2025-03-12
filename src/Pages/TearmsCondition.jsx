const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-md p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          ⚖️ Terms & Conditions
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center italic">
          Please read our terms before using our platform.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            ✅ <strong>Account Rules:</strong> Only teacher's, students and university employee can register and
            trade.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            🚫 <strong>Prohibited Items:</strong> No illegal or restricted
            products allowed.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            📌 <strong>Dispute Resolution:</strong> Contact support for any
            transaction disputes.
          </p>
        </div>

        {/* Delivery Cost Information */}
        <div className="mt-6 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            🚚 Delivery Costs
          </h2>
          <p className="text-xl text-gray-800 font-semibold">
            Inside Campus:{' '}
            <span className="text-green-600 font-bold">Free Delivery</span>
          </p>
          <p className="text-xl text-gray-800 font-semibold">
            Inside Tangail:{' '}
            <span className="text-yellow-600 font-bold">
              60 TK Delivery Charge
            </span>
          </p>
          <p className="text-xl text-gray-800 font-semibold">
            Inside Dhaka Division:{' '}
            <span className="text-blue-600 font-bold">
              100 TK Delivery Charge
            </span>
          </p>
          <p className="text-xl text-gray-800 font-semibold">
            All Over Bangladesh:{' '}
            <span className="text-red-600 font-bold">
              150 TK Delivery Charge
            </span>
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

export default TermsCondition;
