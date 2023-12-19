import styles from "styles/components/Content/Description.module.css";
import Information from "./Infomation";
import Link from "next/link";

const PROJECT_INDEX = 3;

export default function Project_3(): JSX.Element {
    return (
        <div className={styles.descriptionContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.mainDescription}>
                작성한 소스코드를 저장, 다른 사람에게 공유, 다른 사람의 코드 검색이 가능한 <span className={styles.mainSpan}>소스코드 공유 웹 사이트이다. </span>
                <span className={styles.mainSpan}>Git Gist</span>와 당시 주목 받고 있던 <span className={styles.mainSpan}>Copilot</span>에서 영감을 얻어 필요한 로직의 소스코드를 구하여 빠르게 작성할 수 있는 웹 프로젝트를 진행했다.<br/><br/>
                이 프로젝트는 프로젝트 중 처음으로 <span className={styles.mainSpan}>Spring</span>계열의 프레임워크를 사용한 프로젝트였으며, <span className={styles.mainSpan}>Spring Boot</span>를 사용하였다.
                <span className={styles.mainSpan}> JSP</span>를 처음 사용해보았으며, <span className={styles.mainSpan}>JdbcTemplate</span>를 사용해 <span className={styles.mainSpan}>MySQL</span>
                을 사용하였고, <span className={styles.mainSpan}>CodeMirror5</span> 라는 라이브러리를 사용하여 소스코드가 일반 텍스트가 아닌 소스코드 처럼 보이도록 하였다.<span className={styles.mainSpan}> MVC</span> 구조로 구현한 첫 프로젝트였다.<br/><br/>
                해당 프로젝트를 진행하기 전에는 웹 개발에 있어서 단순한 페이지 정도만 만들었었지만, <span className={styles.mainSpan}>DB와 연동하여 게시판과 유사한 형태의 기능을 구현한 것은 처음이었다. </span>
                게시물 삭제, 게시물 수정 등 여러 중요한 기능을 구현해 볼 수 있었던 프로젝트였다.
            </div>
            <div className={styles.infomationContainer}>
                <div className={styles.informationContent}>
                    <div className={styles.label}>
                        ✔ Github
                    </div>
                    <div className={styles.content}>
                        <Link className={styles.linkText} href={"https://github.com/cHr1s0Gil/Code-Tutor"} target="_blank">
                            https://github.com/cHr1s0Gil/Code-Tutor
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.infomationContainer}>
                <Information props={{PROJECT_INDEX: PROJECT_INDEX}}></Information>
            </div>
        </div>
    </div>
    );
}