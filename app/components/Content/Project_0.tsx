import styles from "styles/components/Modal/Description.module.css";

export default function Project_1(): JSX.Element {
    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.mainDescription}>
                    <b>사용자와 비슷한 체형의 아바타를 생성하여 옷을 미리 입어볼 수 있는 기능을 구현한 쇼핑몰입니다.</b>
                    &nbsp;온라인 쇼핑몰에서는 옷을 미리 입어보고 구매할 수 없습니다. 이 점을 보완하기 위해 아이디어를 내어 진행했던 프로젝트입니다.<br /><br />
                    이 프로젝트에서는 <b className={styles.mainBold}>웹</b>과 <b className={styles.mainBold}>앱</b>의 API를 제작하였습니다.
                </div>
                <div className={styles.infomationContainer}>
                    information
                </div>
            </div>
        </div>
    );
}