import React from "react";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import "../ListWrapper/ListWrapper.css";

const ListWrapper = ({ items }: { items: ListItemProps[] }) => {
  return (
    <ul className="listWrapper__wrapper">
      {items.map((item) => (
        <ListItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default ListWrapper;
