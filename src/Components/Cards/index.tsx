import React from "react";
import style from "./card.module.scss";

type CardProps = {
  title: string;
};

const CardComponent: React.FC<CardProps> = ({ title }) => {
  return <div className={style.card}>{title}</div>;
};
export default CardComponent;
