import Link from "next/link";
import Logo from "@/../public/thierno.png";
import Image from "next/image";
import clsx from "clsx";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import ThemeToggler from "./ThemeToggle/ThemeToggle";
import styles from "./Navigation.module.css";
import globalStyles from "@/styles/Global.module.css";

const Navigation = () => {
  return (
    <div className={clsx(globalStyles.container, styles.navigationContainer)}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={Logo} alt="logo" className={styles.logo} />
        </Link>
        <ThemeToggler />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/thierno-barry-0b8527203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <LinkedinLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thierno953"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <GithubLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>Github</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
