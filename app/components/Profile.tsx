import Image from "next/image";

import styles from "styles/components/Profile/Profile.module.css";
import thumbStyles from "styles/components/Profile/ProfileThumb.module.css";
import navStyles from "styles/components/Profile/ProfileNav.module.css";
import infoStyles from "styles/components/Profile/ProfileInfo.module.css";

import config from "../../next.config";

export default function ProfileInfo() {
    const imagePath = config.basePath;

    return (
        <div className={styles.profileContainer}>
            <div className={thumbStyles.profileThumbContainer}>
                <Image
                    className={thumbStyles.profileImage}
                    src={`${imagePath}/static/images/profile_image.png`}
                    alt="프로필 이미지"
                    width={300}
                    height={300}
                    style={{
                        objectFit: "cover"
                    }}
                    priority={true}
                ></Image>
            </div>
            <div className={infoStyles.profileInfoContainer}>
                <div className={infoStyles.profileNameContainer}>
                    <span className={infoStyles.profileName}>- name -</span>
                </div>
                <div className={infoStyles.profileSubContainer}>
                    <span className={infoStyles.profileSub}>
                        Introduce | Back
                    </span>
                </div>
            </div>
            <div className={navStyles.profileNavContainer}>
                <div className={navStyles.githubContainer}></div>
                <div className={navStyles.velogContainer}></div>
                <div className={navStyles.instagramContainer}></div>
                <div className={navStyles.mailContainer}></div>
            </div>
        </div>
    )
}