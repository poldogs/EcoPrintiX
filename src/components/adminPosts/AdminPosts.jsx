"use client";
import styles from "./adminPosts.module.css";
import React from 'react'
import { useState, useEffect } from "react";


const AdminPosts = () => {

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
      try {
        const res = await fetch("https://ecoprintix.vercel.app/api/adminPosts", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {  
      fetchData();
      
    }, []);

    const handleDelete = async (slug) => {
        try {
          const response = await fetch(`https://ecoprintix.vercel.app/api/adminPosts/${slug}`, {
            method: 'DELETE',
          });
      
          if (!response.ok) {
            throw new Error('Error deleting post');
          }
      
          setPosts((currentPosts) => currentPosts.filter((post) => post.slug !== slug));
          
        } catch (error) {
          console.error('Error:', error);
        }
      };
      return (
        <div>
            <h2 className={styles.listTitle}>Posts List</h2>
          {posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <div
                className={styles.postContent}
                dangerouslySetInnerHTML={{ __html: post.desc }}
              />
              <button onClick={() => handleDelete(post.slug)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          ))}
        </div>
      );
}

export default AdminPosts;