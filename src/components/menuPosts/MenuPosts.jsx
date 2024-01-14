import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";


const MenuPosts = async ({ withImage }) => {

  const getData = async () => {
    const res = await fetch(
      `https://ecoprintix.vercel.app/api/posts?topViews=true`,
      {
        cache: "no-store",
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };
  
  const { posts } = await getData();

  return (
    <div className={styles.items}>
      {posts?.map((post) => (
        <Link href={`/posts/${post.slug}`} className={`${styles.item}`} key={post.id}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}> - {post.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
