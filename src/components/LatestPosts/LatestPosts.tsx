import Link from "next/link";
import styles from "./LatestPosts.module.css";
import TestPostImage from "../../../public/images/demo.png";
import Image from "next/image";
import { BlogPost } from "@/utils/helpers";

interface Props {
  posts: BlogPost[];

  hideTitle?: boolean;
}

const LatestPosts = ({ posts, hideTitle }: Props) => {
  const convertImage = (w: number, h: number) => {
    return `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <linearGradient id="g">
              <stop stop-color="#333" offset="20%" />
              <stop stop-color="#222" offset="50%" />
              <stop stop-color="#333" offset="70%" />
          </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>
`;
  };

  const toBase64 = (str: string) => {
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  };

  const getShortTitle = (title: string, maxAmount = 55) => {
    if (title.length > maxAmount) {
      return title.substring(0, maxAmount) + "...";
    }
    return title;
  };

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
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            className={styles.blogPost}
            key={post.slug}
          >
            <Image
              src={post.data.imageUrl} 
              placeholder={"blur"}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(320, 190)
              )}`}
              width={320}
              height={190}
              alt={post.data.title}
              className={styles.blogPostImage}
            />
            <div className={styles.blogPostInfo}>
              <p>{post.data.publishedAt}</p>
              <p>{post.readingTime} min. read</p>
            </div>
            <h3>{getShortTitle(post.data.title)}</h3>
            <div>
              <p>{post.data.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
