import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './adminPage.module.css';
import AdminPosts from '../../components/adminPosts/AdminPosts';
import AdminComments from '../../components/adminComments/AdminComments';
import AdminUsers from '../../components/adminUsers/AdminUsers';

const AdminPage = () => {
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    const password = event.target.elements.password.value;
    if (password === "admin") {
      try {
          localStorage.setItem('isAuthenticated', 'true');
          router.push('/admin');
      } catch (error) {
        console.error('Error fetching:', error);
      }
    }
  };

  if (localStorage.getItem('isAuthenticated')) {
    return (
      <div>
        <AdminPosts/>
        <AdminComments/>
        <AdminUsers/>
      </div>
    );
  }

  return (
    <div>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <input
            type="password"
            name="password"
            className={styles.loginInput}
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
    </div>
  );
};

export default AdminPage;