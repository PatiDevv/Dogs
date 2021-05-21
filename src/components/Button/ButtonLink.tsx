import React from "react";
import styles from "./Button.module.scss"

interface ButtonLinkProps {
    href: string;
    text: string;
}

const ButtonLink = ({ href, text }: ButtonLinkProps) => (
    <a
        href={href}
        className={styles.button}
        target="_blank"
        rel="noreferrer"
    >
        {text}
    </a>
);

export default ButtonLink;