import Link from "next/link";
import clsx from "clsx";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import Logo from "../../../public/thierno.png";
import Image from "next/image";
import ThemeToggler from "./ThemeToggle/ThemeToggler";
import styles from "@/components/Navigation/Navigation.module.css";
import globalStyles from "@/styles/Main.module.css";
import { useRouter } from "next/router";

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <div className={clsx(globalStyles.container, styles.navigationContainer)}>
      <div className={styles.logoContainer}>
        <Image
          priority
          src={Logo}
          placeholder="blur"
          alt="Logo"
          className={styles.logo}
        />
        <ThemeToggler />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.activeLink : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={pathname === "/blog" ? styles.activeLink : undefined}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? styles.activeLink : undefined}
            >
              About
            </Link>
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
