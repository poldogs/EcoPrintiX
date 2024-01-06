import styles from "./adminComments.module.css";
import { useState, useEffect } from 'react';


const AdminComments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/adminComments`, {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed");
            }

            const json = await res.json();
            setComments(json);
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
          const response = await fetch(`/api/adminComments/${id}`, {
            method: 'DELETE',
          });
      
          if (!response.ok) {
            throw new Error('Error deleting comment');
          }
      
          setComments(comments.filter((comment) => comment.id !== id));
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return(
        <div>
            <h2 className={styles.listTitle}>Comments List</h2>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <h2 className={styles.commentUser}>{comment.userEmail}</h2>
              <div
                className={styles.commentContent}
                dangerouslySetInnerHTML={{ __html: comment.desc }}
              />
              At: <div
                className={styles.commentAt}
                dangerouslySetInnerHTML={{ __html: comment.postSlug }}
              />
              <button onClick={() => handleDelete(comment.id)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          ))}
        </div>
    );
}

export default AdminComments;