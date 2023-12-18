import Link from "next/link";
import styles from "styles/components/Content/Description.module.css";
import Information from "./Infomation";

const PROJECT_INDEX = 2;

export default function Project_2(): JSX.Element {
    return (
        <div className={styles.descriptionContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.mainDescription}>
                <span className={styles.mainSpan}>버킷리스트를 작성하고, 공유하는 웹 서비스 프로젝트이다.</span> 생각보다 많은 사람들이 SNS를 보고
                상대적 박탈감을 느낀다는 기사를 보게 되었다. 
                그렇기에 상대방의 SNS를 보고 <span className={styles.mainSpan}>좌절</span>하는 것이 아니라 <span className={styles.mainSpan}>동기부여</span>
                가 되었으면 하는 생각에 이 주제를 선정하게 되었다.<br/><br/>
                <span className={styles.mainSpan}>{"멀티캠퍼스 [Java] 백엔드 개발자 취업캠프"}</span>에서 진행했던
                <span className={styles.mainSpan}> 팀 프로젝트</span>이다.<br/>
                이 프로젝트에서는 <span className={styles.mainSpan}>팀장</span>의 역할을 맡았다. 나를 제외한 모든 팀원은
                비전공자였기에 내가 프로젝트를 이끌어가야 했다.<br/><span className={styles.mainSpan}>형상 관리, 역할 분담, DB 설계 및 구축, 마이페이지 제작, 그룹페이지 제작,
                그룹 멤버관리 구현, PPT 발표</span>의 역할을 맡았다.<br/><br/>
                기존 프로젝트에서는 팀원으로써, 내게 주어진 역할만을 수행하면 되었다. 따라서 프레임워크, DB, API 작성 등에 대한 실력을 늘릴 수 있었다면 
                이 프로젝트 에서는 내 역할 뿐만 아니라<span className={styles.mainSpan}> 팀장으로써 팀원들도 신경써야 했기에 상당한 노력이 필요했다. </span>
                팀장의 역할이 얼마나 중요한지 알게 되었고, 좋은 경험을 할 수 있었던 프로젝트였다.

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