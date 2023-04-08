import styles from "./Alert.module.css"

const Alert = props => <p className={styles.alert}>{props.children}</p>

export default Alert