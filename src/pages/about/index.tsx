import Head from "next/head";
import globalStyles from "@/styles/Main.module.css";
import styles from "./AboutPage.module.css";
import Image from "next/image";
import DawidAbramImage from "../../../public/team-3.jpg";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Thierno M Barry - About</title>
        <meta name="description" content="Thierno Barry - About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thierno.png" />
      </Head>
      <main className={globalStyles.container}>
        <h1 className={globalStyles.mainTitle}>About</h1>
        <section className={styles.aboutMeSection}>
          <header className={styles.imageContainer}>
            <Image
              src={DawidAbramImage}
              placeholder="blur"
              alt="Thierno M Barry"
              className={styles.image}
            />
            <div>
              <p>Hi I’m Thierno M Barry! 👋</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                iste eligendi tempore,{" "}
                <a
                  href="https://react-vitejs-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diarabaka
                </a>
                . Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                laudantium fuga iure magnam sunt quidem mollitia, ad quo ut
                harum saepe! Perspiciatis ullam odio consequuntur accusamus
                inventore doloribus tenetur ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                laudantium fuga iure magnam sunt quidem mollitia, ad quo ut
                harum saepe! Perspiciatis ullam odio consequuntur accusamus
                inventore doloribus tenetur ipsa!{" "}
                <a
                  href="https://react-vitejs-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                laudantium fuga iure magnam sunt quidem mollitia, ad quo ut
                harum saepe! Perspiciatis ullam odio consequuntur accusamus
                inventore doloribus tenetur ipsa!
              </p>
              <p>If you are interested in more information about me</p>
              <Link
                href="/https://react-vitejs-eta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Check out my CV
              </Link>
            </div>
          </header>
        </section>
      </main>
    </>
  );
}
