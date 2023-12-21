import styles from "./styles.module.css";

export function AlertDialog({
  children,
  buttonProps,
}: {
  children: React.ReactNode;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <div className={styles.portal}>
      <div className={styles.overlay} />
      <div className={styles.dialog} role="alertdialog">
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <button {...buttonProps} className={styles.button} />
        </div>
      </div>
    </div>
  );
}
