// import React from 'react';
// import { Link, useRoutes } from 'react-router-dom';
// import './css/nav.css';

// const Nav = () => {
//   const isAdminRoute = useRoutes([
//     { path: '/admin', element: true },
//     { path: '/admin/*', element: true },
//   ]);

//   const showNav = !isAdminRoute;

//   return (
//     <>
//       {showNav && (
//         <nav>
//           <h1 className="nav-title">PHARMA</h1>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//       )}
//     </>
//   );
// };

// export default Nav;


import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
      <ul className="navbar-nav">
            <li className="nav-item logo nav-header custom-link">
              <Link to="/">Pharma-Tech</Link>
            </li>
          </ul>
          <ul className="nav nav-pills margin-right">
            <li className="nav-item custom-link">
            <Link to="/wishlist"><i class="ri-heart-line"></i></Link>
            </li><br></br>
            <li className="nav-item custom-link">
            <Link to="/cart"><i class="ri-shopping-cart-line"></i></Link>
            </li><br></br>
            <div class="dropdown-center">
            <button class="btn dropdown-toggle nav-item custom-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="ri-user-line"></i>
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/auth" class="dropdown-item">Login</Link></li>
              <li><button class="dropdown-item" type="button">My Orders</button></li>
              <li><Link to="/wishlist" class="dropdown-item">Wishlist</Link></li>
            </ul>


           
            
            </div>
          </ul>

      </div>
      {/* <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul> */}
    </nav>
  );
};

export default Nav;
