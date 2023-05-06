import Head from "next/head";
import globalStyles from "@/styles/Global.module.css";
import LatestPosts from "@/components/LatestPosts/LatestPosts";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Thierno Barry - Blog posts</title>
        <meta name="description" content="Thierno Barry - Blog posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thierno.png" />
      </Head>
      <main className={globalStyles.container}>
        <h1 className={globalStyles.mainTitle}>Blog Page</h1>
        <LatestPosts hideTitle />
      </main>
    </>
  );
};

export default BlogPage;
