import Link from "next/link";
import styles from "styles/components/Content/Description.module.css";
import Information from "./Infomation";

const PROJECT_INDEX = 2;

export default function Project_2(): JSX.Element {
    return (
        <div className={styles.descriptionContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.mainDescription}>
                <span className={styles.mainSpan}>{"멀티캠퍼스 [Java] 백엔드 개발자 취업캠프"}</span>에서 진행했던
                <span className={styles.mainSpan}> 팀 프로젝트 입니다.</span>
            </div>
            <div className={styles.infomationContainer}>
                <div className={styles.informationContent}>
                    <div className={styles.label}>
                        ✔ Github
                    </div>
                    <div className={styles.content}>
                        <Link className={styles.linkText} href={"https://github.com/cHr1s0Gil/in-my-bucket"} target="_blank">
                            https://github.com/cHr1s0Gil/in-my-bucket
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.infomationContainer}>
                <div className={styles.informationContent}>
                    <div className={styles.label}>
                        ✔ PPT
                    </div>
                    <div className={styles.content}>
                        <Link className={styles.linkText} href={"https://docs.google.com/presentation/d/1g3jTCa_763qfAKMmVFHnYTr1AWyJnoyS7Up-JTywJjM/edit#slide=id.g23f7f94f391_1_309"} target="_blank">
                            구글 드라이브 링크
                        </Link>
                    </div>
                </div>
            </div>
            <Information props={{ PROJECT_INDEX: PROJECT_INDEX}}></Information>
        </div>
    </div>
    );
}