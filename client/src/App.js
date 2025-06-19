
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';

import AdminDashboard from './pages/AdminDashboard';
import ManageProducts from './pages/ManageProducts';
import ManageOrders from './pages/ManageOrders';

import { CartProvider } from './context/CartContext';
function App() {
  return (
    <div className="App">
     <CartProvider>
      <Router>
        <div> <Header/></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

           {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<ManageProducts />} />
            <Route path="/admin/orders" element={<ManageOrders />} />
        </Routes>
        <Footer/>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
