"use client";

// modules
import { Dispatch, SetStateAction, useEffect, useState } from "react";

// stylesheet
import styles from "styles/components/Button/UpButton.module.css";

// fontawesome
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 화면 스크롤 함수
const scrollToTarget = () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
}

export default function UpButton() {
    const [isScrolled, setIsScrolled]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    
    return (
        <div className={styles.upButtonContainer}
        style={{
            display: isScrolled ? "block" : "none"
        }}
        onClick={scrollToTarget}>
            <div className={styles.upButtonContent}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
}