"use client";
import React, { useState } from 'react';
import styles from './adminPage.module.css';
import AdminPosts from '../../components/adminPosts/AdminPosts';
import AdminComments from '../../components/adminComments/AdminComments';
import AdminUsers from '../../components/adminUsers/AdminUsers';

const AdminPage = () => {
  const [key, setKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleLogin = async (event) => {
    
    event.preventDefault();
    if (key === "admin") {
      try {
          setIsAuthenticated(true);
      } catch (error) {
        console.error('Error fetching:', error);
      }
    }
  };


  return (
    <div>
      {!isAuthenticated ? (
        <form className={styles.loginForm}>
          <input
            type="password"
            value={key}
            onChange={handleKeyChange}
            className={styles.loginInput}
          />
          <button onClick={handleLogin} className={styles.loginButton}>
            Login
          </button>
        </form>
      ) : (
        <div>
          <AdminPosts/>
          <AdminComments/>
          <AdminUsers/>
        </div>
      )}
    </div>
  );
};

export default AdminPage;