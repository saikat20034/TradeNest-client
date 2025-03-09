import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'
import LoadingSpinner from '../../Component/Shared/LoadinSpinner'
import useAuth from '../../Hooks/useAuth'

const Login = () => {
  const { signIn, signInWithGoogle, loading, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  if (user) return <Navigate to={from} replace={true} />
  if (loading) return <LoadingSpinner/>

  // Form submit handler
  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    try {
      // User Login
      await signIn(email, password)
      navigate(from, { replace: true })
      toast.success('Login Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      // User Registration using google
      await signInWithGoogle()
      navigate(from, { replace: true })
      toast.success('Login Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700">
      <div className="flex flex-col max-w-md p-8 rounded-xl sm:p-10 bg-white shadow-2xl text-gray-900 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Log In
          </h1>
          <p className="text-sm text-gray-400">Sign in to access your account</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 w-full rounded-md py-3 text-white text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto text-xl" />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>

        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-purple-600 text-gray-400">
            Forgot password?
          </button>
        </div>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-3 border-gray-300 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 transform hover:scale-105"
        >
          <FcGoogle size={32} />
          <p className="text-lg">Continue with Google</p>
        </div>

        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{' '}
          <Link
            to="/signup"
            className="hover:underline hover:text-purple-600 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
