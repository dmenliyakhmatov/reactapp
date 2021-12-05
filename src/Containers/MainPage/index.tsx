import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "Components/Cards";
import style from "./mainPage.module.scss";

const MainPage = () => {
  const [data, setData] = useState<
    { id: number; name: string; image: string; location: { name: string } }[]
  >([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setData(response.data.results);
    });
  }, []);

  return (
    <div className={style["page-container"]}>
      {data.map((character) => (
        <CardComponent
          key={character.id}
          name={character.name}
          image={character.image}
          location={character.location.name}
        />
      ))}
      {/* <CardComponent title="Первая карточка" /> */}
      {/* <CardComponent title="Вторая карточка" /> */}
      {/* <CardComponent title="Третья карточка" /> */}
      {/* <CardComponent title="Четвертая карточка" /> */}
      {/* <Input name="firstName" validation={isNumberCheck} /> */}
    </div>
  );
};

export default MainPage;
