import { Route, Routes ,Navigate} from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { CartProvider } from '../src/Context/CartContext';
import Explore from './pages/Explore/Explore';
import Home from './components/Home/Home'
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess';
// import Orders from './pages/orders/Orders';
import { useUserAuth } from './Context/UserAuthContext';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
// import Profile from './pages/profile/Profile'
import { UserAuthProvider } from './Context/UserAuthContext';
import Dashboard from './pages/user/Dashboard/Dashboard';
import PrivateRoute from './components/Routes/ProtectedRoute';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import CreateCourse from './pages/AdminDashboard/CreateCourse/CreateCourse'
import Search from './pages/Search/Search';
import Order from './pages/user/Order/Order'
import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";
import Profile from './pages/user/profile/Profile';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './components/HomePage/HomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useUserAuth(); // Add your authentication logic

  if (isAuthenticated) {
    return element;
  } else {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/user-orders' element={<Order />} />
        <Route exact path='/user-profile' element={<Profile />} />
        {/* <Route exact path='/admin-dashboard' element={<AdminDashboard />} /> */}
        <Route exact path='/dashboard' element={<PrivateRoute/>}>
        <Route exact path='user' element={<Dashboard/>} />
        </Route>
        <Route exact path='/dashboard' element={<AdminRoute/>}>
        <Route exact path='admin' element={<AdminDashboard/>} />
        <Route exact path='admin/create-course' element={<CreateCourse/>} />

        </Route>
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/explore' element={<Explore />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkout/>} />
        <Route exact path='/order-success' element={<OrderSuccess/>} />
        <Route exact path='*' element={<PageNotFound/>} />

       
      
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 1500 },
          error: { duration: 1500 },
        }}
        containerStyle={{
          top: "6rem",
        }}
      />
    </div>
  );
}

export default App;

