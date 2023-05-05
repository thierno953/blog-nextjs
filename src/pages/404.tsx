import Head from "next/head";
import globalStyles from "@/styles/Global.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thierno Barry - Not found</title>
        <meta name="description" content="Thierno Barry - Not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thierno.png" />
      </Head>
      <main className={globalStyles.container}>
        <div className={globalStyles.errorContainer}>
          <h1>404</h1>
          <p>Oops! Page not found</p>
        </div>
      </main>
    </>
  ); 
}
