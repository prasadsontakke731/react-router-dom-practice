import React from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
// import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Login from './components/Login';
import Logout from './components/Logout';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';
import { AuthProvider } from './utils/auth';
// import Users from './components/Users';
// import UserDatils from './components/UserDatils';
// import Admin from './components/Admin';
const LazyNew = React.lazy(() => import("./components/New"))
const LazyUsers = React.lazy(() => import("./components/Users"))
const LazyUserDetails = React.lazy(() => import("./components/UserDatils"))
const LazyAdmin = React.lazy(() => import("./components/Admin"))
const LazyAbout = React.lazy(() => import("./components/About"))
const LazyProfile = React.lazy(() => import("./components/Profile"))
function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={
            <React.Suspense fallback="Loading...">

              <LazyAbout />
            </React.Suspense>
          }

          />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='order-summary' element={<OrderSummary />} />

          <Route path='products' element={<Products />} >
            <Route index element={<Featured />} />
            <Route path='featured' element={<Featured />} />
            <Route path='new' element={
              <React.Suspense>

                <LazyNew />
              </React.Suspense>

            } />
          </Route>

          <Route path='users' element={
            <React.Suspense>

              <LazyUsers />
            </React.Suspense>

          } >
            <Route path=':id' element={
              <React.Suspense>

                <LazyUserDetails />
              </React.Suspense>

            } />
            <Route path='admin' element={
              <React.Suspense fallback="Loading">

                <LazyAdmin />
              </React.Suspense>

            } />
          </Route>
          <Route path='profile' element={
            <React.Suspense>
              <LazyProfile />
            </React.Suspense>
          } />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
