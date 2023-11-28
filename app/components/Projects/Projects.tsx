"use client";

// modules
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

// components
import Modal from "components/Modal/Modal";

// stylesheet
import styles from "styles/components/Projects/Projects.module.css";
import titleStyles from "styles/components/Projects/ProjectsTitle.module.css";
import navStyles from "styles/components/Projects/ProjectsNav.module.css";
import contentStyles from "styles/components/Projects/ProjectsContent.module.css";

export default function Projects(): JSX.Element {
    const [isOpenModal, setIsOpenModal]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const [modalIndex, setModalIndex]: [number | null, Dispatch<SetStateAction<number | null>>] = useState<number | null>(null);

    const data: IProjectsData = getData();
    const { title, thumbImage }: IProjectsData = data;

    const openModal: (index: number) => void = (index: number) => {
        setIsOpenModal(true);
        setModalIndex(index);
    };

    const closeModal: () => void = () => {
        setIsOpenModal(false);
        setModalIndex(null);
    }

    return (
        <div className={styles.projects}>
            <div className={styles.projectsContainer}>
                <div className={titleStyles.titleContainer}>
                    <span className={titleStyles.title}>Projects</span>
                </div>
                <div className={navStyles.projectsNav}>
                    {
                        title.map((value: string, index: number) => (
                            <div className={contentStyles.contentContainer} key={index}>
                                <div className={contentStyles.contentTitle}>
                                    <span className={contentStyles.title}>{value}</span>
                                </div>
                                <div className={contentStyles.contentBody}>
                                    <Image
                                        className={contentStyles.contentImage}
                                        src={thumbImage[index]}
                                        alt={value}
                                        width={thumbImage[index].width}
                                        height={thumbImage[index].height}>
                                    </Image>
                                </div>
                                <div className={contentStyles.contentDetail} onClick={() => openModal(index)}>
                                    <span className={contentStyles.detailText}>자세히 보기</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {isOpenModal && <Modal props={{ index: modalIndex, onClose: closeModal }}></Modal>}
        </div>
    )
}

function getData(): IProjectsData {
    const title: string[] = ["title", "title", "title", "title"];
    const thumbImage: IImageData[] = [{
        src: "static/images/home_background.jpg",
        width: 200,
        height: 200
    }, {
        src: "static/images/home_background.jpg",
        width: 200,
        height: 200
    }, {
        src: "static/images/home_background.jpg",
        width: 200,
        height: 200
    }, {
        src: "static/images/home_background.jpg",
        width: 200,
        height: 200
    }];

    const data: IProjectsData = {
        title,
        thumbImage
    }

    return data;
}