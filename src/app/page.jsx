import Link from "next/link";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Image from "next/image";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h2>Keeping track of your your carbon footprint has never been this easy</h2>
        <div className={styles.headerImageContainer}>
          <Image src="/ecology.svg" alt="intro image ecology" width={0} height={0} style={{ width: '50%', height: 'auto' }}/>
        </div>
        <div className={styles.arrows}>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2>Complete tasks related to different categories</h2>

        <div className={styles.block}>
          <div className={styles.blockContent}>
            <h3>Food</h3>
            <p>Complete tasks related to sustainable and eco-friendly food choices. This includes reducing meat consumption, supporting local farmers, and choosing organic products.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/food.svg" alt="Food Category" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockContent}>
            <h3>Transportation</h3>
            <p>Reduce your carbon footprint by choosing sustainable transportation options. This includes using public transportation, carpooling, biking, or walking whenever possible.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/transportation.svg" alt="Transportation Category" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockContent}>
            <h3>Water</h3>
            <p>Conserve water and make eco-friendly choices related to water consumption. This involves reducing water waste, using water-efficient appliances, and being mindful of water usage in daily activities.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/water.svg" alt="Water Category" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockContent}>
            <h3>Energy used</h3>
            <p>Reduce energy consumption and choose sustainable energy sources. This includes using energy-efficient appliances, turning off unused lights, and supporting renewable energy initiatives.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/energy.svg" alt="Energy Category" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockContent}>
            <h3>Recycling</h3>
            <p>Promote recycling and waste reduction. Learn about proper recycling practices, reduce single-use plastic, and support recycling initiatives in your community.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/recycling.svg" alt="Recycling Category" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockContent}>
            <h3>Others...</h3>
            <p>Explore additional eco-friendly tasks and activities that contribute to a sustainable lifestyle. This category encompasses a variety of actions you can take to make a positive impact on the environment.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/ecology2.svg" alt="Others Category" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>


      <section className={styles.blog}>
        <h2>Join a friendly community blog</h2>
        <CategoryList />
        <div className={styles.content}>
          <CardList page={page}/>
        </div>
      </section>

      <section className={styles.callToAction}>
          <h2>Join our community today</h2>
          <p>Start tracking your carbon footprint</p>
          <Link href="/login">
            <button className={styles.actionButton}>Join Now</button>
          </Link>
      </section>
    </div>
  );
}
