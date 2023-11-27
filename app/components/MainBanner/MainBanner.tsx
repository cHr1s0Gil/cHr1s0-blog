// components
import ProfileInfo from "@/app/components/Profile/Profile";

// stylesheet
import styles from "styles/components/MainBanner/MainBanner.module.css";

// config
import config from "../../../next.config";

export default function MainBanner(): JSX.Element {
    const imagePath: string = getData();

    return (
        <div className={styles.MainBanner}>
            <div className={styles.bannerImage}
                style={{ backgroundImage: `url("${imagePath}/static/images/home_background.jpg")` }}>
            </div>
            <ProfileInfo></ProfileInfo>
        </div>
    );
}

function getData(): string {
    return config.basePath;
}