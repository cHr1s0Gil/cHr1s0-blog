//#222
import styles from "styles/components/Footer/Footer.module.css";

export default function Footer(): JSX.Element {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.iconContainer}>
                    <div className={styles.iconList}>
                        icons
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <span className={styles.descriptionText}>text</span>
                </div>
            </div>
        </div>
    );
}