import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Admin.css'

function Admin() {
  useEffect(() => {
    document.title = "Trang quản trị - GUIDES & BLOGS"; 
  }, []); 
  return (
    <main className="admin-content">
      <h2 className="content-title">QUẢN LÝ GUIDES & BLOGS</h2>
      <div className="admin-buttons">
        <Link to="/admin/guides_management" className="admin-button video-button">
          GUIDES
        </Link>
        <Link to="/admin/blogs_management" className="admin-button blog-button">
          BLOGS
        </Link>
      </div>
    </main>
  );
}

export default Admin;