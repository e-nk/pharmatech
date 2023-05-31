import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Admin from './components/Admin/Admin';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path='cart' element={<Cart/>}/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
