import React from 'react';
import styles from './adminPage.module.css';
import AdminPosts from '../../components/adminPosts/AdminPosts';
import AdminComments from '../../components/adminComments/AdminComments';
import AdminUsers from '../../components/adminUsers/AdminUsers';

const AdminPage = () => {

  return (
        <div>
          <AdminPosts/>
          <AdminComments/>
          <AdminUsers/>
        </div>
  );
};

export default AdminPage;