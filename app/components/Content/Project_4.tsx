import styles from "styles/components/Content/Description.module.css";
import Information from "./Infomation";
import Link from "next/link";

const PROJECT_INDEX = 4;

export default function Project_3(): JSX.Element {
    return (
        <div className={styles.descriptionContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.mainDescription}>
                <span className={styles.mainSpan}>포트폴리오 제작을 위해 만든 웹 사이트이다. </span>Full-Stack을 공부하는 사람으로써 나에 대한 내용을 글로만 작성하는 것 보다
                <span className={styles.mainSpan}> 웹 사이트로 제작</span> 하는 것이 더 의미있고 나를 어필하기에 효과적이라고 생각했다. 그렇기에 이 사이트를 제작하게 되었다.<br/><br/>
                이 프로젝트는 <span className={styles.mainSpan}>Next.js</span>로 제작하였다. 그렇기에 프론트는 <span className={styles.mainSpan}>React.js</span>를 이용해 제작하였다.
                뼈대가 될 <span className={styles.mainSpan}>메인 페이지에 레이아웃을 잡고, 컴포넌트를 삽입</span>하는 방식으로 사이트를 제작했다. 처음으로 제작해본 <span className={styles.mainSpan}>Next.js </span>프로젝트였다.
            </div>
            <div className={styles.infomationContainer}>
                <div className={styles.informationContent}>
                    <div className={styles.label}>
                        ✔ Github
                    </div>
                    <div className={styles.content}>
                        <Link className={styles.linkText} href={"https://github.com/cHr1s0Gil/cHr1s0-blog"} target="_blank">
                            https://github.com/cHr1s0Gil/cHr1s0-blog
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