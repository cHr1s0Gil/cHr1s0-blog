import Image from "next/image";

import styles from "styles/components/Skills/LogoContainer.module.css";

export default function LogoContainer({ props }: { props: ILogoContainerProps}): JSX.Element {
    const { title, logoImageData, altTexts }: ILogoContainerProps = props;
    return (
        <div className={styles.logoContainer}>
            <div className={styles.logoTitleContainer}>
                <span className={styles.logoTitle}>{title}</span>
            </div>
            <div className={styles.logoListContainer}>
                {logoImageData.map((imageData: IImageData, index: number) => (
                    <Image
                        key={index}
                        className={styles.logoImage}
                        src={imageData.src}
                        alt={altTexts[index]}
                        width={imageData.width}
                        height={imageData.height}
                    />
                ))}
            </div>
        </div>
    );
}