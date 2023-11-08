import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <CategoryList />
      <h2>Join our community</h2>
      <div className={styles.content}>
        <CardList page={page}/>
      </div>
    </div>
  );
}
