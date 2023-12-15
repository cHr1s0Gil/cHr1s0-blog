import styles from "styles/components/Content/Description.module.css";
import Information from "./Infomation";
import Link from "next/link";

const PROJECT_INDEX: number = 0;

export default function Project_0(): JSX.Element {

    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.mainDescription}>
                    <span className={styles.mainSpan}>사용자와 비슷한 체형의 아바타를 생성하여 옷을 미리 입어볼 수 있는 기능을 구현한 쇼핑몰이다.</span>
                    &nbsp;온라인 쇼핑몰에서는 옷을 미리 입어보고 구매할 수 없다. 이 점을 보완하기 위해 아이디어를 내어 진행했던 프로젝트이다.<br /><br />
                    이 프로젝트에서는 <span className={styles.mainSpan}>웹</span>과 <span className={styles.mainSpan}>앱</span>의 <span className={styles.mainSpan}>API 서버</span>를 제작하였다.
                    <span className={styles.mainSpan}> node.js</span>의 <span className={styles.mainSpan}>express</span>라는 프레임워크를 통해
                    <span className={styles.mainSpan}> MVC 구조</span>로 API 서버를 구축하였다.
                    <span className={styles.mainSpan}> crypto</span>라는 모듈을 이용해 사용자의 비밀번호를 암호화 하는 <span className={styles.mainSpan}>보안 기능을 구현</span>하였다.
                    데이터베이스는 <span className={styles.mainSpan}>MySQL</span>을 사용하였으며, 의류 데이터, 유저 정보, 아바타 정보 등을 저장하도록 데이터베이스를
                    <span className={styles.mainSpan}> 설계</span>하고 <span className={styles.mainSpan}>구축</span>하였다.<br /><br />
                    처음으로 진행해 본 규모가 있는 프로젝트이자 팀 프로젝트였다.
                    백엔드에 대해서 공부하고 싶다는 생각을 가지고 한 첫 번째 프로젝트였기에 완성도는 낮지만 백엔드에 입문해 볼 수 있었던 프로젝트였다.
                </div>
                <div className={styles.informationContent}>
                        <div className={styles.label}>
                            ✔ Github
                        </div>
                        <div className={styles.content}>
                            <Link className={styles.linkText} href={"https://github.com/cHr1s0Gil/dawn-capstone/tree/back-end"} target="+blank">
                                https://github.com/cHr1s0Gil/dawn-capstone/tree/back-end
                            </Link>
                        </div>
                </div>
                <Information props={{PROJECT_INDEX: PROJECT_INDEX}}></Information>
            </div>
        </div>
    );
}

