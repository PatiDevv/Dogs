import React from "react";
import Form from "../Form/Form";
import styles from "./Modal.module.scss"
import { FiXCircle } from "react-icons/fi";

interface ModalProps {
    closeModalFn: () => void
}

const Modal = ({ closeModalFn }: ModalProps) => (
    <div className={styles.wrapper}>
        <Form />
        <div className={styles.icon}><FiXCircle onClick={closeModalFn} size="30px" color="e08283" /></div>
    </div>
);

export default Modal;