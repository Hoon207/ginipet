import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './components/Main';
import Join from './components/Join';
import Login from './components/Login';
import Cart from './components/Cart';
import Order from './components/Order';
import Shop from './components/Shop';
import Brand from './components/Brand';
import Customer from './components/Customer';
import Info from './components/Info';
import Event from './components/Event';
import './style/reset.css'



function App(props) {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/ginipet" element ={<Main />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/join" element ={<Join />} />
          <Route path="/order" element ={<Order />} />
          <Route path="/cart" element ={<Cart />} />
          <Route path="/shop" element ={<Shop />} />
          <Route path="/brand" element ={<Brand />} />
          <Route path="/customer" element ={<Customer />} />
          <Route path="/Info" element ={<Info />} />
          <Route path="/event" element ={<Event />} />
          {/**회원가입 로그 컴포넌트 */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;