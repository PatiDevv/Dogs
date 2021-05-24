import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    secondary?: boolean;
}

const Button = ({ text, secondary }: ButtonProps) => {

    const buttonClass = secondary ? styles.secondary : styles.button;

    return (

        <button className={buttonClass} type="submit">{text}</button>
    );
};

export default Button;