import React from "react"
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Titls";


const Form = ({ submitFn }: any) => {
    return (
        <div className={styles.wrapper}>
            <Title text="Dodaj nowego psa" />

            <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
                <Input name="name" label="Nazwa rasy" maxLength={30} />
                <Input name="link" label="Link do grupy zkwp fci fb" />
                <Input name="image" label="Obrazek" />
                <Input name="description" label="Opis rasy" componentType="textarea" />
                <Button text="Dodaj nową rasę psa" />
            </form>
        </div>
    )
}

export default Form;