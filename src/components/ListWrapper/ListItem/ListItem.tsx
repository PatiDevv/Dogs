import React from "react";
import "./ListItem.css";

export interface ListItemProps {
  name: string;
  src: string;
  description: string;
  facebookLink: string;
}

const ListItem = ({ name, src, description, facebookLink }: ListItemProps) => (
  <li className="listItem__wrapper">
    <img src={src} className="listItem__image" alt={name} />
    <div>
      <h2 className="listItem__name"> {name}</h2>
      <p className="listItem__description">{description}</p>
      <a
        href={facebookLink}
        className="listItem__button"
        target="_blank"
        rel="noreferrer"
      >
        visit fb page
      </a>
    </div>
  </li>
);

export default ListItem;
