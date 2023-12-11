import styles from "styles/components/Modal/Description.module.css";

export default function Project_1(): JSX.Element {
    return (
        <div className={styles.descriptionContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.mainDescription}>
                main
            </div>
            <div className={styles.infomationContainer}>
                information
            </div>
        </div>
    </div>
    );
}