import styles from "./adminPosts.module.css";

const getData = async () => {
  const res = await fetch(
    `https://ecoprintix.vercel.app/api/adminPosts`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const handleDelete = async (slug) => {
  try {
    const response = await fetch(`https://ecoprintix.vercel.app/api/adminPosts/${slug}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting post');
    }

    getData();
  } catch (error) {
    console.error('Error:', error);
  }
};

const AdminPosts = async() => {
  const { posts } = await getData();
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