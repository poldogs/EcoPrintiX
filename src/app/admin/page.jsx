import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './adminPage.module.css';
import AdminPosts from '../../components/adminPosts/AdminPosts';
import AdminComments from '../../components/adminComments/AdminComments';
import AdminUsers from '../../components/adminUsers/AdminUsers';

const AdminPage = () => {
  const router = useRouter();
  const passwordRef = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (passwordRef.current.value === "admin") {
      try {
          router.push('/admin/dashboard');
      } catch (error) {
        console.error('Error fetching:', error);
      }
    }
  };

  return (
    <div>
        <form className={styles.loginForm}>
          <input
            type="password"
            ref={passwordRef}
            className={styles.loginInput}
          />
          <button onClick={handleLogin} className={styles.loginButton}>
            Login
          </button>
        </form>
    </div>
  );
};

export default AdminPage;