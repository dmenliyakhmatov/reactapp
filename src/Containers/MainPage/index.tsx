import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./mainPage.module.scss";
import { routes } from "../../router/routes";

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
      <h3>MainPage</h3>
      <Link className={style.link} to={routes.mainPage}>
        Главная
      </Link>
      <Link to={routes.userList}>Список пользователей</Link>
    </div>
  );
};

export default MainPage;
