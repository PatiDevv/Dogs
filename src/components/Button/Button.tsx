import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    secondary?: boolean;
    onClick?: (e: any) => void;
}

const Button = ({ text, secondary, onClick }: ButtonProps) => {
    const buttonClass = secondary ? styles.secondary : styles.button;

    return (
        <button className={buttonClass} onClick={onClick} type="submit">{text}</button>
    );
};

export default Button;