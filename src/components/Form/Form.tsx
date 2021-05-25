import React from "react"
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Titls";
import RadioInput from "../Modal/RadioInput";

interface Props {
    submitFn?: any
    type?: string;
}

const types = {
    facebook: "facebook",
    article: "article",
    note: "note"
}

export type Types = keyof typeof types


const descriptions = {
    facebook: "nową grupę psów rasowych na fb",
    article: "artykuł o psach rasowych",
    note: "swoją notatkę odnośnie rasy"
}

class Form extends React.Component<Props> {

    state = {
        activeOption: types.facebook as Types,
    }

    handleRadioButtonState = (type: string) => {
        this.setState({ activeOption: type, })
    }

    render() {

        const { submitFn } = this.props;
        const { activeOption } = this.state


        return (
            <div className={styles.wrapper}>
                <Title text={"Dodaj " + descriptions[activeOption]} />

                <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
                    <div className={styles.inputWrapper}>
                        <RadioInput htmlFor={types.facebook} id={types.facebook}
                            checked={activeOption === types.facebook}
                            onChange={() => this.handleRadioButtonState(types.facebook)}
                            label="Facebook" />

                        <RadioInput htmlFor={types.article} id={types.article}
                            checked={activeOption === types.article}
                            onChange={() => this.handleRadioButtonState(types.article)}
                            label="Artykuł" />

                        <RadioInput htmlFor={types.note} id={types.note}
                            checked={activeOption === types.note}
                            onChange={() => this.handleRadioButtonState(types.note)}
                            label="Notatka" />
                    </div>

                    <Input name="name" label={activeOption === types.facebook ? "Nazwa" : "Tytuł"} maxLength={30} />


                    {activeOption === types.facebook ? (<Input name="link" label="Link do grupy zkwp fci na fb" />) : null}

                    {activeOption !== types.note ? (<Input name="image" label="Obrazek" />) : null}


                    <Input name="description" label={activeOption === types.facebook ? "Opis" : "Treść"} componentType="textarea" />
                    <Button text="Dodaj" />
                </form>
            </div>
        )
    }
}


export default Form;