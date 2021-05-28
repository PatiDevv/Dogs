
import React from "react";
import styles from "./Input.module.scss";

interface PropsInput {
    name: string;
    label: string;
    maxLength?: number;
    componentType?: 'textarea' | 'input'
    onChange?: (e: any) => void;
    value: string

}

export default function Input({ componentType = 'input', name, label, maxLength, ...props }: PropsInput) {

    const inputProps = {
        name: name,
        id: name,
        maxLength: maxLength,
        required: true,
        placeholder: " "
    }

    return (
        <div className={styles.formItem}  >
            {
                componentType === 'textarea' ?
                    <textarea className={styles.textarea}  {...inputProps} onChange={props.onChange} value={props.value} /> :
                    <input type="text" className={styles.input}  {...inputProps} {...props} />
            }
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <div className={styles.formItemBar} />
        </div>
    );
};