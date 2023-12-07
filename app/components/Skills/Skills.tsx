import skillsData from "data/skills.json";

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
                    <LogoContainer props={{ title: frontend.title, logoImageData: frontend.imageData, altTexts: frontend.alt }}></LogoContainer>
                    <LogoContainer props={{ title: backend.title, logoImageData: backend.imageData, altTexts: backend.alt }}></LogoContainer>
                    <LogoContainer props={{ title: deploy.title, logoImageData: deploy.imageData, altTexts: deploy.alt }}></LogoContainer>
                </div>
            </div>
        </div>
    );
}

function getData(): ISkillsData {
    const { frontend, backend, deploy }: ISkillsData = skillsData;

    return {
        frontend,
        backend,
        deploy
    }
}