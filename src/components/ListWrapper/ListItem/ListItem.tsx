import React from "react";
import styles from "./ListItem.module.scss";
import ButtonLink from "../../Button/ButtonLink";
import Title from "../../Title/Titls";

export interface ListItemProps {
  name: string;
  src?: string;
  description: string;
  facebookLink: string;

}

const ListItem = ({ name, src, description, facebookLink }: ListItemProps) => {

  const ImageTag = src ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      <ImageTag src={src} className={src ? styles.image : styles.imageNone} alt={name} />
      <div>
        <Title text={name} />
        <p className={styles.description}>{description}</p>
        <ButtonLink href={facebookLink} text="Poznaj mnie lepiej!" />
      </div>
    </li>
  );
}

export default ListItem;
