import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { FaYinYang } from 'react-icons/fa';
import { uploadImage } from '../../API/utils';
import useAuth from '../../Hooks/useAuth';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();

  // Form submit handler
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      // Upload the image and get the URL
      const imageUrl = await uploadImage(image);

      // Register user
      const result = await createUser(email, password);

      // Send email verification
      await sendEmailVerification(result.user);
      toast.success('Verification email sent! Please check your inbox.');

      // Update user profile with name and uploaded image URL
      await updateUserProfile(name, imageUrl);

      navigate('/verify-email'); // Redirect to a verification page
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Something went wrong');
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
      toast.success('Signup Successful');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex flex-col max-w-md p-6 rounded-xl sm:p-10 bg-white shadow-xl text-gray-900 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            Sign Up
          </h1>
          <p className="text-sm text-gray-400">Welcome to TradeNest</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-900"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 w-full rounded-md py-3 text-white text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {loading ? (
                <FaYinYang className="animate-spin m-auto text-xl" />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-gray-700"></div>
          <p className="px-3 text-sm">Signup with social accounts</p>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-200"
        >
          <FcGoogle size={32} />
          <p className="text-lg">Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="hover:underline hover:text-lime-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
