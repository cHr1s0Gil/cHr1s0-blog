import Image from "next/image";

import styles from "styles/components/Projects/Projects.module.css";
import titleStyles from "styles/components/Projects/ProjectsTitle.module.css";
import navStyles from "styles/components/Projects/ProjectsNav.module.css";
import contentStyles from "styles/components/Projects/ProjectsContent.module.css";
import Link from "next/link";

export default function Projects(): JSX.Element {
    const data: IProjectsData = getData();
    const { title, thumbImage }: IProjectsData = data;

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
                                <Link href="#">
                                    <div className={contentStyles.contentDetail}>
                                        <span className={contentStyles.detailText}>자세히 보기</span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
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