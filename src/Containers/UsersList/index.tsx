import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "Components/Cards";
import { Link } from "react-router-dom";
import style from "./userList.module.scss";
import { routes } from "../../router/routes";

const UserList = () => {
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
      <h3>UserList</h3>
      <Link to={routes.mainPage}>Главная</Link>
      <Link to={routes.userList}>Список пользователей</Link>
      {data.map((character) => (
        <CardComponent
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          location={character.location.name}
        />
      ))}
    </div>
  );
};

export default UserList;
