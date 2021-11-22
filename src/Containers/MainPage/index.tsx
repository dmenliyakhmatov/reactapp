import CardComponent from "Components/Cards";
import style from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={style["page-container"]}>
      <CardComponent title="Первая карточка" />
      <CardComponent title="Вторая карточка" />
      <CardComponent title="Третья карточка" />
      <CardComponent title="Четвертая карточка" />
    </div>
  );
};

export default MainPage;
