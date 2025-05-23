import { createBrowserRouter } from 'react-router-dom'
import Root from './../Layout/Root';
import ErrorPage from './../Pages/ErrorPage';
import Home from './../Pages/Home/Home';
import MedDetails from './../Pages/MedDetails/MedDetails';
import Login from './../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from './../Layout/DashboardLayout';
import Statistics from './../Pages/Dashboard/Common/Statistics';
import AddMed from './../Pages/Dashboard/Seller/AddMed';
import MyInventory from './../Pages/Dashboard/Seller/MyInventory';
import ManageUsers from './../Pages/Dashboard/Admin/ManageUsers';
import Profile from './../Pages/Dashboard/Common/Profile';
import MyOrders from './../Pages/Dashboard/Customer/MyOrders';
import ManageOrders from './../Pages/Dashboard/Seller/ManageOrders';
import SellerRoute from './SellerRoute';
import AdminRoute from './AdminRoute';
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';
import AboutUs from '../Pages/AboutUs';
import Jobs from '../Pages/Jobs'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import PressKit from '../Pages/PressKitt'
import TermsCondition from '../Pages/TearmsCondition'
import ContactUs from '../Pages/Contact'
import SearchResults from '../Pages/SearchResults';
import CreateAccount from '../Component/CreateAccount/CreateAccount';
import PostYourItem from '../Component/PostYourItem/PostYourItem';
import BrowseBuyInfoPage from '../Component/BrowseBuyInfoPage/BrowseBuyInfoPage';
import Meds from '../Component/Home/Meds';
import CompleteOrderPage from '../Component/CompleteOrderPage/CompleteOrderPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/medicine/:id',
        element: (
          <PrivateRoute>
            <MedDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-product',
        element: (
          <PrivateRoute>
            <SellerRoute>
              <AddMed />
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-inventory',
        element: (
          <PrivateRoute>
            <SellerRoute>
              <MyInventory />
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-orders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-orders',
        element: (
          <PrivateRoute>
            <SellerRoute>
              <ManageOrders />
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: 'about-us', element: <AboutUs></AboutUs> },
  { path: 'buy-now', element: <Meds></Meds> },

  { path: 'contact', element: <ContactUs></ContactUs> },
  { path: 'search-result', element: <SearchResults></SearchResults> },
  { path: 'create-account', element: <CreateAccount></CreateAccount> },
  { path: 'post-your-items', element: <PostYourItem></PostYourItem> },
  { path: 'jobs', element: <Jobs></Jobs> },
  { path: 'press-kit', element: <PressKit></PressKit> },
  { path: 'privacy-policy', element: <PrivacyPolicy></PrivacyPolicy> },
  { path: 'terms-of-service', element: <TermsCondition></TermsCondition> },
  { path: 'browse-buy', element: <BrowseBuyInfoPage></BrowseBuyInfoPage> },
  { path: 'complete-order', element:<CompleteOrderPage></CompleteOrderPage> },
]);