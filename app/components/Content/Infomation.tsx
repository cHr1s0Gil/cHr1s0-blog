import Link from "next/link";
import styles from "styles/components/Content/Description.module.css";
import descriptionData from "data/description.json";

export default function Information({ props }: { props: { PROJECT_INDEX: number } }) {
    const PROJECT_INDEX: number = props.PROJECT_INDEX;
    const { label, content }: { label: string[], content: string[][] } = getData().description;
    return (
        <div className={styles.informationContainer}>
            {
                label.map((value: string, index: number) => (
                    <div key={index} className={styles.informationContent}>
                        <div className={styles.label}>
                            {value}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.contentText}>
                                {content[PROJECT_INDEX][index]}<br />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

function getData(): IInformationData {
    const data: IInformationData = descriptionData;
    return data;
}