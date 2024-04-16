import React from "react";
import { Route, Routes } from "react-router-dom";
import Music from "./components/music";
import Home from "./components/home";
import Tabs from "./components/tabs";
import CartScreen from "./components/cartScreen";
import App from "./App";

const AppRoutes = (props) => (
  <App {...props}>
    <Routes>
      <Route
        exact
        path="/"
        element={<Home {...props} />} // Pasar props a Home
      />
      <Route
        exact
        path="/music"
        element={<Music {...props} />} // Pasar props a Music
      />

      <Route
        exact
        path="/tabs"
        element={<Tabs {...props} />} // Pasar props a Home
      />
      <Route
        exact
        path="/cartScreen"
        element={<CartScreen {...props} />} // Pasar props a Home
      />
    </Routes>
  </App>
);

export default AppRoutes;
