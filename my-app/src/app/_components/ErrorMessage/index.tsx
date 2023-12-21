import { ReactNode } from "react";
import styles from "./styles.module.css";

export function ErrorMessage({ children }: { children: ReactNode }) {
  return <span className={styles.message}>{children}</span>;
}
