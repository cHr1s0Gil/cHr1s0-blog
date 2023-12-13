// modules
import Link from "next/link";

// config
import pathConfig from "@/next.config";

// stylesheet
import styles from "styles/components/Footer/Footer.module.css";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faSquareInstagram, faVimeo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// data
import profileData from "data/profile.json";

export default function Footer(): JSX.Element {
    const data: IProfileData = getData();
    const { name, href, target, className, icon, basePath}: IProfileData = data;
    
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.iconContainer}>
                    <div className={styles.iconList}>
                        {
                            href.map((value: string, index: number) => (
                                <Link className={styles.linkContainer} href={value} target={target[index]} key={index}>
                                    <div className={styles[className[index]]}>
                                        <FontAwesomeIcon icon={icon[index]} size="2x" />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <span className={styles.descriptionText}>© 2023. Gil Hong Bae. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
}

function getData(): IProfileData {
    const { name, href, target, className }: { name: string, href: string[], target: string[], className: string[] } = profileData;
    const icon: IconDefinition[] = [faGithub, faVimeo, faSquareInstagram, faEnvelope];

    const data: IProfileData = {
        name,
        href,
        target,
        className,
        icon,
        basePath: pathConfig.basePath
    }

    return data;
}