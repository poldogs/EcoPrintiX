"use client"
import React, { useState } from 'react';
import axios from 'axios';
import styles from './adminPostsPage.module.css';

const AdminPostsPage = () => {
  const [key, setKey] = useState('');
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleLogin = async (event) => {
    
    event.preventDefault();
    if (key === 'admin') {
      try {
        const response = await fetch('/api/adminPosts');
        if (response.ok) {
          const posts = await response.json();
          setPosts(posts);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  };

  const handleDelete = async (postId) => {
    console.log(postId);

    try {
      const response = await fetch(`/api/adminPosts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: key }),
      });
  
      if (response.ok) {
        setPosts(posts.filter(post => post.id !== postId));
      } else {
        console.error('Error deleting post:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
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
          {posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <div
                className={styles.postContent}
                dangerouslySetInnerHTML={{ __html: post.desc }}
              />
              <button onClick={() => handleDelete(post.id)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPostsPage;