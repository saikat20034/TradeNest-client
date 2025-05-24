const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-4xl mt-16 bg-white shadow-lg rounded-md p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          ⚖️ Terms & Conditions
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center italic">
          Please read the following terms carefully before using our platform.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              👤 Account Eligibility
            </h2>
            <p className="text-lg text-gray-700">
              Only verified{' '}
              <span className="font-semibold">
                students, teachers, and university staff
              </span>{' '}
              are allowed to create accounts and engage in buying or selling
              activities on this platform. Misuse of account credentials may
              result in permanent suspension.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              🚫 Prohibited Items
            </h2>
            <p className="text-lg text-gray-700">
              Selling of illegal, restricted, or counterfeit goods is strictly
              forbidden. This includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-2 ml-4">
              <li>Drugs or alcohol</li>
              <li>Weapons or sharp objects</li>
              <li>Stolen or pirated materials</li>
              <li>Explicit or harmful content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              🛠️ Dispute Resolution
            </h2>
            <p className="text-lg text-gray-700">
              In case of any disputes or misunderstandings between buyers and
              sellers, please reach out to our support team immediately. We aim
              to resolve all issues fairly and promptly through investigation
              and mediation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              📦 Product Delivery Policy
            </h2>
            <p className="text-lg text-gray-700">
              The seller is responsible for delivering the product directly to
              the{' '}
              <span className="font-semibold">
                buyer’s hall or residential quarter
              </span>{' '}
              within the university premises. The buyer must confirm receipt of
              the item upon delivery.
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Delivery outside campus will include additional charges as
              outlined below.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              🚚 Delivery Costs
            </h2>
            <div className="space-y-2 text-lg text-gray-800 font-semibold">
              <p>
                Inside Campus:{' '}
                <span className="text-green-600 font-bold">Free Delivery</span>
              </p>
              <p>
                Inside Tangail:{' '}
                <span className="text-yellow-600 font-bold">
                  50 TK Delivery Charge
                </span>
              </p>
              <p>
                All Over Bangladesh:{' '}
                <span className="text-red-600 font-bold">
                  110 TK Delivery Charge
                </span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              🛡️ User Responsibilities
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 ml-4">
              <li>
                Always verify the condition and authenticity of a product before
                purchasing.
              </li>
              <li>Keep communication respectful and transparent.</li>
              <li>
                Report any suspicious activity or users to the admin
                immediately.
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-10 text-center">
          <a
            href="/"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-8 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
