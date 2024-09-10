import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Portal</h1>
      <p>Select a login or signup option:</p>
      
      <div>
        <h2>Admin</h2>
        <Link to="/admin/login">Admin Login</Link> | <Link to="/admin/signup">Admin Signup</Link>
      </div>

      <div>
        <h2>Vendor</h2>
        <Link to="/vendor/login">Vendor Login</Link> | <Link to="/vendor/signup">Vendor Signup</Link>
      </div>

      <div>
        <h2>User</h2>
        <Link to="/user/login">User Login</Link> | <Link to="/user/signup">User Signup</Link>
      </div>
    </div>
  );
}

export default Home;
