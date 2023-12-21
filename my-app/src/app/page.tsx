import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/pattern1">Pattern1: Return Message</Link>
        </li>
        <li>
          <Link href="/pattern2">Pattern2: Return Result</Link>
        </li>
        <li>
          <Link href="/pattern3">Pattern3: AlertDialog</Link>
        </li>
        <li>
          <Link href="/pattern4">Pattern4: Snackbar</Link>
        </li>
      </ul>
    </main>
  );
}
