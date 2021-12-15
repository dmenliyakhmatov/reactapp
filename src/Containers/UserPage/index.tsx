import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "Components/Cards";
import { useParams } from "react-router-dom";
import style from "./userList.module.scss";

const UserPage = () => {
  const [data, setData] = useState<{
    id: number;
    name: string;
    image: string;
    location: { name: string };
  }>(null);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((response) => {
        setData(response.data);
      });
  }, [params.id]);

  return (
    <div className={style["page-container"]}>
      {data && (
        <CardComponent
          id={data.id}
          name={data.name}
          image={data.image}
          location={data.location.name}
        />
      )}
    </div>
  );
};

export default UserPage;
