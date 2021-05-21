import React from "react";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import styles from "./ListWrapper.module.scss";

const ListWrapper = ({ items }: { items: ListItemProps[] }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <ListItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default ListWrapper;
