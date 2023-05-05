import Image from "next/image";
import Profile from "../../../public/team-3.jpg";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <header className={styles.welcomeContainer}>
      <Image
        priority
        src={Profile}
        placeholder="blur"
        alt="Thierno Barry"
        className={styles.image}
      />
      <h1>
        Hi I’m Thierno M Barry! 👋
        <br />
        A full stack website developer specialising in javascript applications
        (React and NodeJS)
        <br />I am currently learning DevOps and System Admin @
        <a
          href="https://becode.org/all-trainings/pedagogical-framework-devops/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Becode
        </a>
      </h1>
    </header>
  );
};

export default WelcomeSection;
