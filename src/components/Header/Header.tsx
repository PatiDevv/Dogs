import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import styles from "./Header.module.scss"
import ImageAssets from "../../constants/ImageAssets";
import Button from "../Button/Button";

interface HeaderProps {
    openModalFn: () => void
}

const Header = ({ openModalFn }: HeaderProps) => (
    <header className={styles.wrapper}>
        <img src={ImageAssets.logo} alt="Logo-Dogs" />
        <HeaderNavigation />
        <Button onClick={openModalFn} secondary text="Pokaż mi" />
    </header>
);

export default Header;