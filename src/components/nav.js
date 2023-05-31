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
    <nav>
      <h1 className="nav-title">PHARMA</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
