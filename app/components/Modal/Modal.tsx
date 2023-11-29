import Image from "next/image";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "styles/components/Modal/Modal.module.css";
import headerStyles from "styles/components/Modal/ModalHeader.module.css";
import contentStyles from "styles/components/Modal/ModalContent.module.css";
import ImageSlider from "./ImageSlider";

export default function Modal({ props }: { props: IModalProps }) {
    const { index, onClose }: IModalProps = props;

    const onModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const modal: Element | null = document.querySelector(".modalContainer");
        
        if(modal && modal === event.target)
            onClose();
    }

    return (
        <div className={`${styles.modalContainer} modalContainer`} onClick={onModalClick}>
            <div className={styles.modalContent}>
                <div className={headerStyles.titleContainer}>
                    <span className={headerStyles.title}>Title</span>
                    <div className={headerStyles.closeContainer}>
                        <div className={headerStyles.closeBtn} onClick={onClose}>
                            <FontAwesomeIcon icon={faCircleXmark} size="3x" />
                        </div>
                    </div>
                </div>
                <div className={headerStyles.subTitleContainer}>
                    <span className={headerStyles.subTitle}>subTitle</span>
                </div>
                <div className={contentStyles.modalContentContainer}>
                    <ImageSlider></ImageSlider>
                    <div className={contentStyles.descriptionContainer}>
                    </div>
                </div>
            </div>
        </div>
    )
}