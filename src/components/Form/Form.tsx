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
    twitter: "twitter",
    article: "article",
    note: "note"
}

export type Types = keyof typeof types


const descriptions = {
    twitter: "nową grupę psów rasowych na fb",
    article: "artykuł o psach rasowych",
    note: "swoją notatkę odnośnie rasy"
}

class Form extends React.Component<Props> {

    state = {
        activeOption: types.twitter as Types,
    }

    handleRadioButtonState = (type: string) => {
        this.setState({ activeOption: type, })
    }

    render() {

        const { submitFn } = this.props


        return (
            <div className={styles.wrapper}>
                <Title text={"Dodaj " + descriptions[this.state.activeOption]} />

                <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
                    <div className={styles.inputWrapper}>
                        <RadioInput htmlFor={types.twitter} id={types.twitter}
                            checked={this.state.activeOption === types.twitter}
                            onChange={() => this.handleRadioButtonState(types.twitter)}
                            label="Twitter" />

                        <RadioInput htmlFor={types.note} id={types.note}
                            checked={this.state.activeOption === types.note}
                            onChange={() => this.handleRadioButtonState(types.note)}
                            label="Notatka" />

                        <RadioInput htmlFor={types.article} id={types.article}
                            checked={this.state.activeOption === types.article}
                            onChange={() => this.handleRadioButtonState(types.article)}
                            label="Artykuł" />
                    </div>

                    <Input name="name" label="Nazwa rasy" maxLength={30} />
                    <Input name="link" label="Link do grupy zkwp fci fb" />
                    <Input name="image" label="Obrazek" />
                    <Input name="description" label="Opis rasy" componentType="textarea" />
                    <Button text="Dodaj nową rasę psa" />
                </form>
            </div>
        )
    }
}


export default Form;