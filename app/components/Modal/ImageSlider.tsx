
import Image from "next/image";
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";

import styles from "styles/components/Modal/ImageSlider.module.css";

export default function ImageSlider({ props }: { props: IImageData[] }) {
    const IMAGE_SIZE: number = props.length;
    const images: number[] = Array.from({ length: IMAGE_SIZE }, (v: unknown, index: number) => index + 1);
    const sliderRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGE_SIZE);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGE_SIZE) % IMAGE_SIZE);
    }

    return (
        <div className={styles.sliderContainer}>
            <div ref={sliderRef} className={styles.imageContainer}>
                {images.map((value: number, index: number) => (
                    <Image
                        key={index}
                        className={`${styles.image} ${value === currentIndex + 1 ? styles.active : ''}`}
                        src={props[index].src}
                        alt={`이미지 ${index}`}
                        width={1920}
                        height={1080}
                    >
                    </Image>
                ))}
            </div>
            <div className={styles.sliderBtnContainer}>
                <div className={styles.prevBtn} onClick={prevSlide}>{"<"}</div>
                <span className={styles.pagination}>{currentIndex + 1}/{IMAGE_SIZE}</span>
                <div className={styles.nextBtn} onClick={nextSlide}>{">"}</div>
            </div>
        </div>
    );
}