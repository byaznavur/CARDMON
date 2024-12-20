import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Costs from "./pages/Costs";
import Debts from "./pages/Debts";
import Layout from "./components/layout/index";
import NotFaund from "./pages/NotFaund";

const App = () => {
  const [debts, setDebts] = useState([
    {
      id: "1",
      name: "Azamat",
      deadline: "2023-09-30",
      amount: 1000,
      phone: "994571234",
      description: "Aniq va'da bergan !",
    },
    {
      id: "2",
      name: "Shohrux",
      deadline: "2023-10-02",
      amount: 2000,
      phone: "9983431234",
      description: "Bfd fdjsf lkfj dlskf  !",
    },
    {
      id: "3",
      name: "Nodirbek",
      deadline: "2023-10-01",
      amount: 1500,
      phone: "997777777",
      description: "Ffdf kfjdk keeeqw fdsfds !",
    },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="costs" element={<Costs />} />
          <Route path="debts" element={<Debts debts={debts} />} />
        </Route>
        <Route path="*" element={<NotFaund />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
