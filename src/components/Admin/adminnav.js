import React from 'react';
import { Link } from 'react-router-dom';
import './css/adminnav.css';

const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <ul>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/purchases">Purchases</Link>
        </li>
        <li>
          <Link to="/admin/sales">Sales</Link>
        </li>
        <li>
          <Link to="/admin/supplier">Supplier</Link>
        </li>
        <li>
          <Link to="/admin/reports">Reports</Link>
        </li>
        <li>
          <Link to="/admin/access-control">Access Control</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
