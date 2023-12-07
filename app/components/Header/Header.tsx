"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "styles/components/Header/Header.module.css";

const scrollToTarget = (targetDiv: string) => {
    const target = document.querySelector("." + targetDiv);

    if(target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

export default function Header(): JSX.Element {
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
        <div 
            className={styles.headerContainer}
            style={{
                boxShadow: isScrolled ? "0 1px 0.3rem hsla(0,0%,80%,.8)" : "none",
                backgroundColor: isScrolled ? "white" : "transparent",
                color: isScrolled ? "black" : "rgba(255, 255, 255, 1)"
            }}>
            <div className={styles.headerContent}>
                <div className={styles.headerTitle}>
                    <span className={styles.titleText}>Chriso's Portfolio</span>
                </div>
                <div className={styles.headerNavBar}>
                    <div className={styles.navMenu} onClick={() => scrollToTarget("aboutMe")}>
                        About Me
                    </div>
                    <div className={styles.navMenu} onClick={() => scrollToTarget("skills")}>
                        Skills
                    </div>
                    <div className={styles.navMenu} onClick={() => scrollToTarget("projects")}>
                        Projects                        
                    </div>
                </div>
            </div>
        </div>
    )
}