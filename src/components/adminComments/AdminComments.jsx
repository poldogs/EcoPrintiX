import useSWR from 'swr';
import styles from "./adminComments.module.css";

const fetcher = url => fetch(url).then(res => res.json());

const AdminComments = () => {
  const { data: comments, mutate } = useSWR('https://ecoprintix.vercel.app/api/adminComments', fetcher);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://ecoprintix.vercel.app/api/adminComments/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting comment');
      }

      mutate();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!comments) {
    return <div>Loading...</div>;
  }

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