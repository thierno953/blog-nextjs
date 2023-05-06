import Link from "next/link";
import styles from "./LatestPosts.module.css";
import TestPostImage from "../../../public/images/demo.png";
import Image from "next/image";

interface Props {
  hideTitle?: boolean;
}

const LatestPosts = ({ hideTitle }: Props) => {
  return (
    <section className={styles.latestPosts}>
      
      {!hideTitle && (
        <div className={styles.latestPostsTop}>
          <h2>Latest posts</h2>
          <Link href="/blog" className={styles.viewAllBtn}>
            View all
          </Link>
        </div>
      )}

      <div className={styles.blogPostsGrid}>
        <Link href="/" className={styles.blogPost}>
          <Image
            src={TestPostImage}
            placeholder={"blur"}
            width={320}
            height={190}
            alt="TestPostImage"
            className={styles.blogPostImage}
          />
          <div className={styles.blogPostInfo}>
            <p>06/05/2023</p>
            <p>5 min. read</p>
          </div>
          <h3>Common Surface - Web app development</h3>
        </Link>
        <Link href="/" className={styles.blogPost}>
          <Image
            src={TestPostImage}
            placeholder={"blur"}
            width={320}
            height={190}
            alt="TestPostImage"
            className={styles.blogPostImage}
          />
          <div className={styles.blogPostInfo}>
            <p>06/05/2023</p>
            <p>5 min. read</p>
          </div>
          <h3>Common Surface - Web app development</h3>
        </Link>
        <Link href="/" className={styles.blogPost}>
          <Image
            src={TestPostImage}
            placeholder={"blur"}
            width={320}
            height={190}
            alt="TestPostImage"
            className={styles.blogPostImage}
          />
          <div className={styles.blogPostInfo}>
            <p>06/05/2023</p>
            <p>5 min. read</p>
          </div>
          <h3>Common Surface - Web app development</h3>
        </Link>
        <Link href="/" className={styles.blogPost}>
          <Image
            src={TestPostImage}
            placeholder={"blur"}
            width={320}
            height={190}
            alt="TestPostImage"
            className={styles.blogPostImage}
          />
          <div className={styles.blogPostInfo}>
            <p>06/05/2023</p>
            <p>5 min. read</p>
          </div>
          <h3>Common Surface - Web app development</h3>
        </Link>
        <Link href="/" className={styles.blogPost}>
          <Image
            src={TestPostImage}
            placeholder={"blur"}
            width={320}
            height={190}
            alt="TestPostImage"
            className={styles.blogPostImage}
          />
          <div className={styles.blogPostInfo}>
            <p>06/05/2023</p>
            <p>5 min. read</p>
          </div>
          <h3>Common Surface - Web app development</h3>
        </Link>
      </div>
    </section>
  );
};

export default LatestPosts;
