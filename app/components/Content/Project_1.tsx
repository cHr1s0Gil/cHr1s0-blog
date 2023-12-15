import styles from "styles/components/Content/Description.module.css";
import Information from "./Infomation";
import Link from "next/link";

const PROJECT_INDEX: number = 1;

export default function Project_1(): JSX.Element {
    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.contentContainer}>
            <div className={styles.mainDescription}>
                <span className={styles.mainSpan}>목적지가 같은 학생들이 동승자를 구해 택시비를 아낄 수 있도록 도와주는 어플리케이션이다. </span>
                기존에도 목적지가 같은 동승자를 <span className={styles.mainSpan}>에브리타임</span>이라는 커뮤니티에서 구할 수 있었다.
                이 방법은 게시글 형태로 작성하다 보니 다른 게시글이 등록될 때 마다 게시물이 아래로 내려가 동승자를 구하는 것이 쉽지 않았다.<br/><br/>
                먼저 완성이 된 프로젝트였으나, 같이 프로젝트에 참여했던 인원이 빠지게 되어 이후 프로젝트를 받아 <span className={styles.mainSpan}>배포 및 유지보수</span>를 맡게 되었다.<br/><br/>
                이 프로젝트에서는 <span className={styles.mainSpan}>node.js</span>를 통한 <span className={styles.mainSpan}>API 유지보수</span>,<span className={styles.mainSpan}> nodemailer</span> 모듈을 통해 <span className={styles.mainSpan}>메일 전송 유지보수</span>
                <span className={styles.mainSpan}> FCM 알림</span>, <span className={styles.mainSpan}>Cafe24</span>를 통한 서버 배포 등의 작업을 진행하였다.
            </div>
                <div className={styles.informationContent}>
                    <div className={styles.label}>
                        ✔ Android
                    </div>
                    <div className={styles.content}>
                        <Link className={styles.linkText} href={"https://play.google.com/store/apps/details?id=com.dldmswo1209.hallymtaxi&hl=ko-KR"} target="_blank">
                            구글 플레이스토어 링크
                        </Link>
                    </div>
                </div>
                <div className={styles.informationContent}>
                    <div className={styles.label}>
                        ✔ IOS
                    </div>
                    <div className={styles.content}>
                        <Link className={styles.linkText} href={"https://apps.apple.com/kr/app/%EB%A6%BC%EC%B9%B4-%ED%83%9D%EC%8B%9C-%ED%95%A9%EC%8A%B9-%EC%95%B1/id6449635061"} target="_blank">
                            앱 스토어 링크
                        </Link>
                    </div>
                </div>
                <Information props={{ PROJECT_INDEX: PROJECT_INDEX }}></Information>
            </div>
        </div>
    );
}