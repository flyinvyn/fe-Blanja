import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./auth/login";
import Register from './auth/register';
import Home from './page/home';
import MyBag from './page/order/myBag';
import Checkout from './page/checkout';
import DetailProduct from './page/detail/detailProduct';
import ProfileSeller from './page/profileSeller/profileSeller';
import ProductCreate from './page/profileSeller/productCreate';
import ProductSeller from './page/profileSeller/productSeller';
import ProfileCustomer from './page/profileCustomer/profileCustomer';
import CustomerAddress from './page/profileCustomer/profileAddress';
import RequireAuth from './auth/requireAuth';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='mybag' element={<MyBag />} />
      <Route path='checkout' element={<RequireAuth><Checkout /></RequireAuth>} />
      <Route path='product/:id' element={<RequireAuth><DetailProduct /></RequireAuth>} />
      <Route path='profile/seller' element={<RequireAuth><ProfileSeller /></RequireAuth>} />
      <Route path='product/create' element={<ProductCreate />} />
      <Route path='product' element={<ProductSeller />} />
      <Route path='profile/customer' element={<RequireAuth><ProfileCustomer /></RequireAuth>} />
      <Route path='profile/address' element={<CustomerAddress />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
