import React from "react";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Music";
import Home from "./components/Home";
import Tabs from "./components/Tabs";
import CartScreen from "./components/CartScreen";
import Payment from "./components/Payment";
import Completion from "./components/Completion";
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
      <Route
        exact
        path="/checkout"
        element={<Payment {...props} />} // Pasar props a Home
      />
      <Route
        exact
        path="/completion"
        element={<Completion {...props} />} // Pasar props a Home
      />
    </Routes>
  </App>
);

export default AppRoutes;
