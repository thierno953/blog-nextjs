import Image from "next/image";
import DawidAbramImage from "../../../public/team-3.jpg";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <header className={styles.welcomeContainer}>
      <Image
        priority
        src={DawidAbramImage}
        placeholder="blur"
        alt="Dawid Abram"
        className={styles.image}
      />
      <h1>
        Hi I’m Thierno Barry! 👋
        <br />
        A full stack website developer specialising in javascript applications and DevSecOps engineer
        <br />
        Currently working @{" "}
        <a href="https://react-vitejs-eta.vercel.app" target="_blank" rel="noopener noreferrer">
          Diarabaka
        </a>
      </h1>
    </header>
  );
};

export default WelcomeSection;
