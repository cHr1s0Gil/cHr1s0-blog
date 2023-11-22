import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';

import styles from "styles/components/About/About.module.css";


export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.aboutMeContainer}>
                    <div className={styles.titleContainer}>
                        <span className={styles.titleText}>About Me</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.infoContent}>
                            <div className={styles.infoIcon}>
                                <FontAwesomeIcon icon={faUser} size="4x" />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoLabel}>
                                    Label
                                </div>
                                <div className={styles.infoValue}>
                                    Value
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}