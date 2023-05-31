import React from 'react';
import AdminNav from './adminnav';

const Admin = () => {
  return (
    <div>
      <AdminNav />
      <div className="admin-content">
        {/* Place the content for the admin panel here */}
      </div>
    </div>
  );
};

export default Admin;
