import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import LoadingSpinner from '../../Component/Shared/LoadinSpinner';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const { signIn, signInWithGoogle, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  if (user) return <Navigate to={from} replace={true} />;
  if (loading) return <LoadingSpinner />;

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate(from, { replace: true });
      toast.success('Login Successful');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
      toast.success('Login Successful');
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
          'url("https://i.postimg.cc/28wCk8W3/bl-gamer-mbstu-wallpaper-7.jpg")',
      }}
    >
      {/* Overlay for blur and dark tint */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-md p-8 bg-white/80 rounded-xl backdrop-blur-md shadow-2xl transform transition-all duration-300 hover:shadow-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Log In
            </h1>
            <p className="text-sm text-gray-600">
              Access your TradeNest account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
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
                autoComplete="current-password"
                required
                placeholder="********"
                className="w-full px-4 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white text-lg font-semibold rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin mx-auto text-xl" />
              ) : (
                'Continue'
              )}
            </button>
          </form>

          <div className="flex justify-end mt-2">
            <button className="text-xs text-gray-500 hover:underline hover:text-purple-600">
              Forgot password?
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-400" />
            <p className="px-3 text-sm text-gray-600">Or login with</p>
            <div className="flex-1 h-px bg-gray-400" />
          </div>

          <div
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={24} />
            <span className="text-sm font-medium">Continue with Google</span>
          </div>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don&apos;t have an account?{' '}
            <Link
              to="/signup"
              className="text-purple-600 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
