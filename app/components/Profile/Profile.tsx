// module
import Image from "next/image";
import Link from "next/link";

// stylesheet
import styles from "styles/components/Profile/Profile.module.css";
import thumbStyles from "styles/components/Profile/ProfileThumb.module.css";
import navStyles from "styles/components/Profile/ProfileNav.module.css";
import infoStyles from "styles/components/Profile/ProfileInfo.module.css";

// config
import pathConfig from "@/next.config";

// fontawesome
import { IconDefinition, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareInstagram, faVimeo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// data
import profileData from "data/profile.json";

export default function ProfileInfo(): JSX.Element {
    const data: IProfileData = getData();
    const { name, href, target, className, icon, basePath }: IProfileData = data;
    return (
        <div className={styles.profileContainer}>
            <div className={thumbStyles.profileThumbContainer}>
                <Image
                    className={thumbStyles.profileImage}
                    src={`${basePath}/static/images/Profile/profile.jpg`}
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
                    <span className={infoStyles.profileName}>- {name} -</span>
                </div>
                <div className={infoStyles.profileSubContainer}>
                    <span className={infoStyles.profileSub}>
                        Full-stack | Backend
                    </span>
                </div>
            </div>
            <div className={navStyles.profileNavContainer}>
                {
                    href.map((value: string, index: number) => (
                        <Link className={navStyles.linkContainer} href={value} target={target[index]} key={index}>
                            <div className={styles[className[index]]}>
                                <FontAwesomeIcon icon={icon[index]} size="3x" />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
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