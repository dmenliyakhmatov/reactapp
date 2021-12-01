import style from "./mainPage.module.scss";
import Input from "../../Components/Common/FormComponents/Input";
import { isNumberCheck } from "../../helpers/inputValidator";

const MainPage = () => {
  return (
    <div className={style["page-container"]}>
      {/* <CardComponent title="Первая карточка" /> */}
      {/* <CardComponent title="Вторая карточка" /> */}
      {/* <CardComponent title="Третья карточка" /> */}
      {/* <CardComponent title="Четвертая карточка" /> */}
      <Input name="firstName" validation={isNumberCheck} />
    </div>
  );
};

export default MainPage;
