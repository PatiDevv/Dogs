import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => (
    <button className={styles.button} type="submit">{text}</button>
);

export default Button;