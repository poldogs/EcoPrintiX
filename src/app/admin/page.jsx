"use client";
import React, { useState, useEffect } from 'react';
import styles from './adminPage.module.css';
import AdminPosts from '../../components/adminPosts/AdminPosts';
import AdminComments from '../../components/adminComments/AdminComments';
import AdminUsers from '../../components/adminUsers/AdminUsers';

const AdminPage = () => {
  const [key, setKey] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    window.history.replaceState(null, '', `${window.location.pathname}?all`);
  }, []);

  const handleKeyChange = (event) => {
    setKey(event.target.value);
    if (event.target.value === 'admin') {
      setIsAdmin(true);
    }
  };

  if (!isAdmin) {
    return (
      <div className={styles.loginForm}>
        <input 
          type="password" 
          value={key} 
          onChange={handleKeyChange} 
          placeholder="Enter admin key" 
          className={styles.loginInput}
        />
        <button className={styles.loginButton} onClick={handleKeyChange}>Submit</button>
      </div>
    );
  }

  return (
    <div>
      <AdminPosts/>
      <AdminComments/>
      <AdminUsers/>
    </div>
  );
};

export default AdminPage;