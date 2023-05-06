import Head from "next/head";
import globalStyles from "@/styles/Global.module.css";
import styles from "./AboutPage.module.css";
import Image from "next/image";
import DawidAbramImage from "../../../public/team-3.jpg";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Thierno M Barry - About</title>
        <meta name="description" content="Dawid Abram - About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={globalStyles.container}>
        <h1 className={globalStyles.mainTitle}>About me</h1>
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
                I&apos;m a full stack website developer based in Belgium
                currently working at{" "}
                <a
                  href="https://react-vitejs-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Becode
                </a>
                . I work with javascript technologies, such as ReactJs and
                NextJs, but also have a solid background in NodeJS, which I have
                utilized to develop APIs and backend logic with ExpressJS.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                voluptates facere fuga labore repudiandae, cum necessitatibus
                quasi in temporibus dolore eius{" "}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                voluptates facere fuga labore repudiandae, cum necessitatibus
                quasi in temporibus dolore eius quaerat dignissimos tenetur
                beatae magni neque. Iste, molestiae earum!
              </p>
              <p>If you are interested in more information about me</p>
              <Link
                href="/"
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
