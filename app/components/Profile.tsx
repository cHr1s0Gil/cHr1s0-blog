import styles from "styles/components/ProfileInfo/ProfileInfo.module.css";

export default function ProfileInfo() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileThumbContainer}>
                <div className={styles.profileTempImage}></div>
            </div>
            <div className={styles.profileInfoContainer}>
                <div className={styles.profileNameContainer}>
                    <span className={styles.profileName}>name</span>
                </div>
                <div className={styles.profileSubContainer}>
                    <span className={styles.profileSub}>
                        Introduce | Back
                    </span>
                </div>
            </div>
            <div className={styles.profileNavContainer}>
                <div className={styles.githubContainer}></div>
                <div className={styles.velogContainer}></div>
                <div className={styles.instagramContainer}></div>
                <div className={styles.mailContainer}></div>
            </div>
        </div>
    )
}