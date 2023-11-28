import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/components/Modal/Modal.module.css";

export default function Modal({ props }: { props: IModalProps }) {
    const { index, onClose }: IModalProps = props;

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Title</span>
                    <div className={styles.closeContainer}>
                        <div className={styles.closeBtn} onClick={onClose}>
                            <FontAwesomeIcon icon={faCircleXmark} size="3x" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}