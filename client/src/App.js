import React from 'react';
import './App.scss';
import Home from './pages/home';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/products';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='portofolio' element={<Products />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
