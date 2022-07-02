import React from 'react';
import Home from './pages/home';
import Header from './components/header/header';
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/products';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart';
import OrderForm from './pages/orderForm';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <header>
          <Header showMenu={true}>
            <Link to="/" className="custom-nav-link">Acasă</Link>
            <Link to="/about" className="custom-nav-link">Despre noi</Link>
            <Link to="/login" className="custom-nav-link">Autentificare</Link>
            <Link to="/register" className="custom-nav-link">Înregistrare</Link>
            <Link to="/cart" className="custom-nav-link"><FiShoppingCart /></Link>
          </Header>
        </header>
        <main>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='portofolio' element={<Products />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='cart' element={<Cart />} />
            <Route path='orderForm' element={<OrderForm />} />
          </Routes>
        </main>
        <footer>
          <Header showMenu={false}/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
