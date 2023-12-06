// styles
import styles from "styles/components/Skills/Skills.module.css";
import LogoContainer from "./LogoContainer";

export default function Skills(): JSX.Element {
    const data: ISkillsData = getData();
    const { frontend, backend, deploy }: ISkillsData = data

    return (
        <div className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
                <div className={styles.contentTitleContainer}>
                    <span className={styles.contentTitle}>Skills</span>
                </div>
                <div className={styles.skillsListContainer}>
                    <LogoContainer props={{title: "FrontEnd", logoImageData: frontend.imageData, altTexts: frontend.alt}}></LogoContainer>
                    <LogoContainer props={{title: "backend", logoImageData: backend.imageData, altTexts: backend.alt}}></LogoContainer>
                    <LogoContainer props={{title: "deploy", logoImageData: deploy.imageData, altTexts: deploy.alt}}></LogoContainer>
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
        src: "static/images/Skills/frontend/react.svg",
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
    },
    {
        src: "static/images/Skills/backend/express.svg",
        width: 1920,
        height: 1080
    },
    {
        src: "static/images/Skills/backend/postman.svg",
        width: 1920,
        height: 1080
    }];

    const bAlt: string[] = [
        "nodejs logo",
        "spring logo",
        "express logo",
        "postman logo"
    ];

    const dImageData: IImageData[] = [{
        src: "static/images/Skills/deploy/aws.svg",
        width: 1920,
        height: 1080
    },
    {
        src: "static/images/Skills/deploy/heroku.svg",
        width: 1920,
        height: 1080
    },
    {
        src: "static/images/Skills/deploy/nginx.svg",
        width: 1920,
        height: 1080
    }];

    const dAlt: string[] = [
        "ec2 logo",
        "heroku logo",
        "nginx logo"
    ];

    // const lImageData: IImageData[] = [{

    // }];

    // const lAlt: string[] = [
    //     "java logo",
    //     "javascript logo",
    // ];

    return {
        frontend: {
            imageData: fImageData,
            alt: fAlt
        },
        backend: {
            imageData: bImageData,
            alt: bAlt
        },
        deploy: {
            imageData: dImageData,
            alt: dAlt
        }
    }
}