import ClientComponent from "./ClientComponent";
import styles from "./page.module.css";
import { initialState } from "./state";

export default function Page() {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Pattern4: AlertDialog2</h2>
      <ClientComponent initalState={initialState} />
    </main>
  );
}
