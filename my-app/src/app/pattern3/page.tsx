import ClientComponent from "./ClientComponent";
import styles from "./page.module.css";
import { initialState } from "./state";

export default function Page() {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Pattern3: AlertDialog1</h2>
      <ClientComponent initalState={initialState} />
    </main>
  );
}
