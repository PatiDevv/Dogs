import React from "react";
import ListItem, { ListItemProps } from "./ListItem";
import styles from "./List.module.scss";

const List = ({ items }: { items: ListItemProps[] }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <ListItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default List;
