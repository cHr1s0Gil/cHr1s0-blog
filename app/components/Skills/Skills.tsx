// modules
import Image from "next/image";

// styles
import styles from "styles/components/Skills/Skills.module.css";

export default function Skills(): JSX.Element {
    const data: ISkillsData = getData();
    const { frontend, backend }: ISkillsData = data;

    return (
        <div className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
                <div className={styles.skillsList}>
                    <div className={styles.titleContainer}>
                        <span className={styles.titleText}>FrontEnd</span>
                    </div>
                    <div className={styles.logoContainer}>
                        {
                            data && frontend.imageData.map((value: IImageData, index: number) => (
                                <Image
                                    key={index}
                                    className={styles.logoImage}
                                    src={value.src}
                                    alt={frontend.alt[index]}
                                    width={value.width}
                                    height={value.height}
                                ></Image>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.skillsList}>
                    <div className={styles.titleContainer}>
                        <span className={styles.titleText}>Backend</span>
                    </div>
                    <div className={styles.logoContainer}>
                        {
                            data && backend.imageData.map((value: IImageData, index: number) => (
                                <Image
                                    key={index}
                                    className={styles.logoImage}
                                    src={value.src}
                                    alt={frontend.alt[index]}
                                    width={value.width}
                                    height={value.height}
                                ></Image>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.skillsList}>
                    <div className={styles.titleContainer}>
                        <span className={styles.titleText}>Title</span>
                    </div>
                    <div className={styles.logoContainer}></div>
                </div>
            </div>
        </div>
    );
}

function getData(): ISkillsData {
    const fImageData: IImageData[] = [{
        src: "static/images/Skills/frontend/html.png",
        width: 1920,
        height: 1080
    },
    {
        src: "static/images/Skills/frontend/java.png",
        width: 1920,
        height: 1080
    },
    {
        src: "static/images/Skills/frontend/react.png",
        width: 1920,
        height: 1080
    },
    {
        src: "static/images/Skills/frontend/ts.svg",
        width: 1920,
        height: 1080
    },
    {
        src: "static/images/Skills/frontend/nextjs.svg",
        width: 1920,
        height: 1080
    }];

    const fAlt: string[] = [
        "html logo",
        "java logo",
        "react logo",
        "ts logo",
        "nextjs logo"
    ];

    const bImageData: IImageData[] = [{
        src: "static/images/Skills/backend/nodejs.png",
        width: 1920,
        height: 1080
    },
    {
        src: "static/images/Skills/backend/spring.svg",
        width: 1920,
        height: 1080
    }];

    const bAlt: string[] = [
        "nodejs logo",
        "spring logo"
    ];

    return {
        frontend: {
            imageData: fImageData,
            alt: fAlt
        },
        backend: {
            imageData: bImageData,
            alt: bAlt
        }
    }
}