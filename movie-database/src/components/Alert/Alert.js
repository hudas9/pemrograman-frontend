import styles from "./Alert.module.css"

function Alert({ children }) {
  return <p className={styles.alert}>{children}</p>
}

export default Alert
