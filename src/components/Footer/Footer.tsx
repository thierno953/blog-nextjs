import globalStyles from "@/styles/Global.module.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={globalStyles.container}>
      <footer className={styles.footer}>
        <p>
          © {new Date().getUTCFullYear()} by Thierno Barry. All rights reserved.
        </p>
        <a
          href="https://github.com/thierno953"
          className={styles.sourceCodeLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          source code
        </a>
      </footer>
    </div>
  );
};

export default Footer;
