import styles from "./error.module.css"

export default function LoadingError() {
    return (
        <div className={styles.errorMessage}>
            Oops! Something went wrong...
        </div>
    )
}