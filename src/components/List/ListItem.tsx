import React from "react";
import styles from "./ListItem.module.scss";
import ButtonLink from "../Button/ButtonLink";
import Title from "../Title/Titls";

export interface ListItemProps {
  title: string;
  src?: string;
  description: string;
  link: string;

}

const ListItem = ({ title, src, description, link }: ListItemProps) => {

  const ImageTag = src ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      {src && <ImageTag src={src} className={src ? styles.image : styles.imageNone} alt={title} />}

      <div>
        <Title text={title} />
        <p className={styles.description}>{description}</p>
        <ButtonLink href={link} text="Poznaj mnie lepiej!" />
      </div>
    </li>
  );
}

export default ListItem;
