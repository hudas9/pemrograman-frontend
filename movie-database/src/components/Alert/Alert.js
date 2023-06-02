import styles from './Alert.module.css'

export default function Alert({ children }) {
  return <p className={styles.alert}>{children}</p>
}
