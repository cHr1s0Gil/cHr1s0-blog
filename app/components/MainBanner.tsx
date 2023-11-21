import { url } from "inspector";
import styles from "styles/components/MainBanner/MainBanner.module.css";

import config from "../../next.config";

export default function MainBanner() {
    return (
        <div className={styles.MainBanner} style={{backgroundImage: `url("${config.basePath}/static/images/home_background.jpg")`}}>
            <h1>test</h1>
        </div>
    );
}