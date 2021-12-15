import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import MainPage from "../Containers/MainPage";
import UserList from "../Containers/UsersList";
import UserPage from "../Containers/UserPage";

const Pages = () => {
  return (
    <Routes>
      <Route path={routes.mainPage} element={<MainPage />} />
      <Route path={routes.userList} element={<UserList />} />
      <Route path={routes.user} element={<UserPage />} />
    </Routes>
  );
};

export default Pages;
