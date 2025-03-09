const PressKit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-md p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          📰 Press Kit
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center italic">
          Find our latest press releases, media assets, and company information.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            📄 <strong>Company Overview:</strong> A student-driven marketplace
            for buying & selling.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            🎤 <strong>Media Contacts:</strong> Reach out for interviews or PR
            inquiries.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            📸 <strong>Brand Assets:</strong> Download our logo and branding
            materials.
          </p>
        </div>

        {/* Download Section for Brand Assets */}
        <div className="mt-8 space-y-4 text-center">
          <p className="text-xl text-gray-800 font-semibold">🖼️ Brand Assets</p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform transition-all duration-300"
          >
            Download Logo
          </a>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform transition-all duration-300 mt-4"
          >
            Download Press Kit
          </a>
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

export default PressKit;
