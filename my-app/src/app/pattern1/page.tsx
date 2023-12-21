import ClientComponent from "./ClientComponent";
import styles from "./page.module.css";
import { initalState } from "./state";

export default function Page() {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Pattern1: Return Message</h2>
      <ClientComponent initalState={initalState} />
    </main>
  );
}
