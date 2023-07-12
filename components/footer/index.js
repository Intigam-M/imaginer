import Link from "next/link";
import GithubIcon from "@/assets/icons/github.svg"
import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/Intigam-M" target="_blank">
        <GithubIcon />
      </Link>
      <p>
        Made by <b>Intigam Mammadli</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
}

export { Footer };