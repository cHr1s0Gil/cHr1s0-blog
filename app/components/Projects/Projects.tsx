import styles from "styles/components/Projects/Projects.module.css";
import titleStyles from "styles/components/Projects/ProjectsTitle.module.css";
import navStyles from "styles/components/Projects/ProjectsNav.module.css";
import contentStyles from "styles/components/Projects/ProjectsContent.module.css";

export default function Projects(): JSX.Element {
    return (
        <div className={styles.projects}>
            <div className={styles.projectsContainer}>
                <div className={titleStyles.titleContainer}>
                    <span className={titleStyles.title}>Title</span>
                </div>
                <div className={navStyles.projectsNav}>
                    <div className={contentStyles.contentContainer}>
                        <div className={contentStyles.contentTitle}>
                            <span className={contentStyles.title}>Title</span>
                        </div>
                        <div className={contentStyles.contentBody}>

                        </div>
                        <div className={contentStyles.contentDetail}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}