import React from "react"
import AppContext from "../../context";
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
        type: types.facebook as Types,
        title: " ",
        link: " ",
        image: " ",
        description: " ",
    }

    handleRadioButtonState = (type: string) => {
        this.setState({ type })
    }

    handleInputChange = (e: { target: { name: any; value: any; }; }) => {

        this.setState({
            [e.target.name]: e.target.value,
        });

        console.log(`
        title: ${this.state.title},
        link: ${this.state.link}
        image: ${this.state.image},
        description: ${this.state.description}
        `
        );
    }

    render() {

        const { submitFn } = this.props;
        const { type } = this.state


        return (
            <AppContext.Consumer>
                {(context) => (<div className={styles.wrapper}>
                    <Title text={"Dodaj " + descriptions[type]} />

                    <form autoComplete="off" className={styles.form} onSubmit={(e) => context.addItem(e, this.state)}>
                        <div className={styles.inputWrapper}>
                            <RadioInput htmlFor={types.facebook} id={types.facebook}
                                checked={type === types.facebook}
                                onChange={() => this.handleRadioButtonState(types.facebook)}
                                label="Facebook" />

                            <RadioInput htmlFor={types.article} id={types.article}
                                checked={type === types.article}
                                onChange={() => this.handleRadioButtonState(types.article)}
                                label="Artykuł" />

                            <RadioInput htmlFor={types.note} id={types.note}
                                checked={type === types.note}
                                onChange={() => this.handleRadioButtonState(types.note)}
                                label="Notatka" />
                        </div>

                        <Input onChange={this.handleInputChange} value={this.state.title} name="title" label={type === types.facebook ? "Nazwa" : "Tytuł"} maxLength={30} />


                        {type === types.facebook ? (<Input onChange={this.handleInputChange} value={this.state.link} name="link" label="Link do grupy zkwp fci na fb" />) : null}

                        {type !== types.note ? (<Input onChange={this.handleInputChange} value={this.state.image} name="image" label="Obrazek" />) : null}


                        <Input onChange={this.handleInputChange} value={this.state.description} name="description" label={type === types.facebook ? "Opis" : "Treść"} componentType="textarea" />

                        <Button text="Dodaj" />
                    </form>
                </div>)}
            </AppContext.Consumer>
        )
    }
}


export default Form;