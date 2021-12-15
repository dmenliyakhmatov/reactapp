import Input from "Components/Common/FormComponents/Input";
import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.scss";

type CardProps = {
  id: number;
  name: string;
  image: string;
  location: string;
};

const CardComponent: React.FC<CardProps> = ({ id, image, location, name }) => {
  return (
    <div className={style.card}>
      <Link to={`/user/${id}`}> {name}</Link>
      <h4>{location}</h4>
      <Input name="firstName" initValue={name} />
      <img src={image} alt="charachter" width={50} height={50} />
    </div>
  );
};
export default CardComponent;
