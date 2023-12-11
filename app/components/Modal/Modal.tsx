import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "styles/components/Modal/Modal.module.css";
import headerStyles from "styles/components/Modal/ModalHeader.module.css";
import contentStyles from "styles/components/Modal/ModalContent.module.css";
import ImageSlider from "./ImageSlider";

import contentData from "data/content.json";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ComponentType } from "react";


export default function Modal({ props }: { props: IModalProps }) {
    const { index, onClose }: IModalProps = props;
    const data: IModalContentData = getData(index);

    const Description: ComponentType<{}> = dynamic(() => import(`components/Content/Project_${index}`), { loading: () => <p>Loading...</p> });

    const onModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const modal: Element | null = document.querySelector(".modalContainer");
        
        if(modal && modal === event.target)
            onClose();
    }

    return (
        <div className={`${styles.modalContainer} modalContainer`} onClick={onModalClick}>
            <div className={styles.modalContent}>
                <div className={headerStyles.titleContainer}>
                    <span className={headerStyles.title}>{data.title}</span>
                    <div className={headerStyles.closeContainer}>
                        <div className={headerStyles.closeBtn} onClick={onClose}>
                            <FontAwesomeIcon icon={faCircleXmark} size="3x" />
                        </div>
                    </div>
                </div>
                <div className={headerStyles.subTitleContainer}>
                    <span className={headerStyles.subTitle}>{data.subTitle}</span>
                    <Link className={headerStyles.link} href={data.href} target="_blank">{data.href}</Link>
                </div>
                <div className={contentStyles.modalContentContainer}>
                    <ImageSlider props={data.images}></ImageSlider>
                    <Description></Description>
                </div>
            </div>
        </div>
    )
}

function getData(index: number | null): IModalContentData {
    const data: IModalContentData = contentData.data[index!!];
    return data;
}