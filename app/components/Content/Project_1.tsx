import styles from "styles/components/Content/Description.module.css";

export default function Project_1(): JSX.Element {
    return (
        <div className={styles.descriptionContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.mainDescription}>
                main1
            </div>
            <div className={styles.infomationContainer}>
                information1
            </div>
        </div>
    </div>
    );
}