import React from "react";
import ListItem, { ListItemProps } from "./ListItem";
import styles from "./List.module.scss";

const List = ({ items }: { items: ListItemProps[] }) => {
  return (
    <>

      {items.length  ? 
      
        ( <ul className={styles.wrapper}>
        {items.map((item) => (
          <ListItem key={item.title} {...item} />
        ))}</ul>) 
        
        : 
        <h1 className={styles.noItems}>Dodaj, co tylko chcesz! :) </h1>}
    </>
  );
};

export default List;
