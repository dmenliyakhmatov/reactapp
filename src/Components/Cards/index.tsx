import Input from "Components/Common/FormComponents/Input";
import React from "react";
import style from "./card.module.scss";

type CardProps = {
  name: string;
  image: string;
  location: string;
};

const CardComponent: React.FC<CardProps> = ({ name, image, location }) => {
  return (
    <div className={style.card}>
      <h3> {name}</h3>
      <h4>{location}</h4>
      <Input name="firstName" initValue={name} />
      <img src={image} alt="charachter" width={50} height={50} />
    </div>
  );
};
export default CardComponent;
