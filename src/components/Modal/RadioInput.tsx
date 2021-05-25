import React from "react";
import styles from "./RadioInput.module.scss";

interface Props {
    id?: string;
    checked?: boolean;
    onChange?: () => void;
    htmlFor: string;
    label: string;

}

const RadioInput = ({ id, checked, onChange, htmlFor, label }: Props) => {
    return (

        <label className={styles.radio} htmlFor={htmlFor}>
            <input
                id={id}
                type="radio"
                checked={checked}
                onChange={onChange}
            />
            <div className={styles.radioButton} />
            {label}
        </label>

    )
};

export default RadioInput;


