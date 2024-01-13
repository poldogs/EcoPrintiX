import styles from "./adminPosts.module.css";
import { useState, useEffect } from 'react';


const AdminPosts = ({posts, setPosts}) => {

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/adminPosts`, {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed");
            }

            const json = await res.json();
            setPosts(json);
        };

        fetchData();
    }, []);

    const handleDelete = async (slug) => {
        try {
          const response = await fetch(`/api/adminPosts/${slug}`, {
            method: 'DELETE',
          });
      
          if (!response.ok) {
            throw new Error('Error deleting post');
          }
      
          setPosts(posts.filter((post) => post.slug !== slug));
          fetchData();
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