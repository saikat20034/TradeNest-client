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

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      const imageUrl = await uploadImage(image);
      const result = await createUser(email, password);
      await sendEmailVerification(result.user);
      toast.success('Verification email sent! Please check your inbox.');
      await updateUserProfile(name, imageUrl);
      navigate('/verify-email');
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Something went wrong');
    }
  };

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
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/MH1Kb7XY/bl-gamer-mbstu-wallpaper-11.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-md p-8 bg-white/80 rounded-xl backdrop-blur-md shadow-2xl transition-all duration-300 hover:shadow-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Sign Up
            </h1>
            <p className="text-sm text-gray-600">Welcome to TradeNest</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-1 text-sm font-medium">
                Profile Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-900"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white text-lg font-semibold rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {loading ? (
                <FaYinYang className="animate-spin mx-auto text-xl" />
              ) : (
                'Continue'
              )}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-400" />
            <p className="px-3 text-sm text-gray-600">Or sign up with</p>
            <div className="flex-1 h-px bg-gray-400" />
          </div>

          <div
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={24} />
            <span className="text-sm font-medium">Continue with Google</span>
          </div>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-orange-500 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
