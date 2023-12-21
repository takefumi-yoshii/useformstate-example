import { ReactNode } from "react";
import { useTimeout } from "react-use";
import styles from "./styles.module.css";
import clsx from "clsx";

export function SnackBar({
  children,
  color = "green",
}: {
  children: ReactNode;
  color?: "green" | "red";
}) {
  const [isReady] = useTimeout(2000);
  const [isFade] = useTimeout(1600);
  if (isReady()) return null;
  return (
    <p className={clsx(styles.box, styles[color], isFade() && styles.fade)}>
      {children}
    </p>
  );
}
