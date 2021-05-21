import React from "react";
import styles from "./Title.module.scss"

interface TitleProps {
    text: string;
}

const Title = ({ text }: TitleProps) => (
    <h2 className={styles.h2}>{text}</h2>
);

export default Title;