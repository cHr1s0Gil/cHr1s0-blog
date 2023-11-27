// styles
import styles from "styles/components/About/About.module.css";
import titleStyles from "styles/components/About/AboutTitle.module.css";
import navStyles from "styles/components/About/AboutNav.module.css";
import contentStyles from "styles/components/About/AboutContent.module.css";

// fontawesome
import { IconDefinition, faCakeCandles, faEnvelope, faLocationDot, faPen, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';

// types
import { IAboutData } from "interfaces/about/About";


export default function About(): JSX.Element {
    const data: IAboutData = getData();
    const { icon, label, content }: IAboutData = data;

    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <div className={titleStyles.titleContainer}>
                        <span className={titleStyles.title}>About Me</span>
                    </div>
                    <div className={navStyles.aboutNav}>
                        {
                            icon.map((value: IconDefinition, index: number) => (
                                <div className={contentStyles.aboutNavContent} key={index}>
                                    <div className={contentStyles.contentIcon}>
                                        <FontAwesomeIcon icon={value} size="2x" />
                                    </div>
                                    {/* 정보 추가 */}
                                    <div className={contentStyles.contentContainer}>
                                        <div className={contentStyles.contentLabel}>
                                            {label[index]}
                                        </div>
                                        <div className={contentStyles.contentValue}>
                                            {content[index]}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function getData(): IAboutData {
    const icon: IconDefinition[] = [faUser, faCakeCandles, faPhone, faEnvelope, faLocationDot, faPen];
    // 나중에 추가 내용 기재
    const label: string[] = ["label", "label", "label", "label", "label", "label"];
    const content: string[] = ["content", "content", "content", "content", "content", "content"];

    const data: IAboutData = {
        icon,
        label,
        content,
    }

    return data;
}