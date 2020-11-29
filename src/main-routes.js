import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import FavoritePage from "./containers/FavoritePage/FavoritePage";

const MainRoutes = () => (
    <Switch>
      <Route exact path="/favorites">
        <FavoritePage />
      </Route>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Switch>
);

export default MainRoutes;
