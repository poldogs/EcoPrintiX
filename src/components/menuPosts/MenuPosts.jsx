"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";


const MenuPosts = ({ withImage }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/topViews", {
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

    getData();
  }, []);

  return (
    <div className={styles.items}>
      {posts.map((post) => (
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
              <span className={styles.date}> - {post.createdAt}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
