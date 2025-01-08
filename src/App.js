import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 } from "uuid";

import "./App.css";

import Layout from "./components/layout/index";
import NotFaund from "./pages/NotFaund";
import { DEBTS } from "./constants";

import Home from "./pages/Home";
import Costs from "./pages/Costs";
import Debts from "./pages/Debts";
import Login from "./pages/Login";
import Debt from "./pages/Debt";

const App = () => {
  const [debts, setDebts] = useState(
    JSON.parse(localStorage.getItem(DEBTS)) || []
  );
  // !costs
  const [costs, setCosts] = useState([
    {
      id: 1,
      title: "Products",
      day: "30-12-2023",
      price: 1000,
      desc: "For shop and ....",
    },
    {
      id: 1,
      title: "Products",
      day: "30-12-2023",
      price: 1000,
      desc: "For shop and ....",
    },
  ]);
  const [selected, setSelected] = useState(null); // similar

  const [validated, setValidated] = useState(false); // similar

  const [show, setShow] = useState(false); // similar

  const searchRef = useRef(); // similar

  const [search, setSearch] = useState(""); // similar

  const [debt, setDebt] = useState({
    name: "",
    deadline: "",
    amount: "",
    phone: "",
    description: "",
  });
  const [cost, setCost] = useState({
    title: "",
    day: "",
    price: "",
    desc: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      let newDebts;
      let newDebt = { ...debt, amount: +debt.amount, id: v4() };

      if (selected === null) {
        newDebts = [...debts, newDebt];
        toast.success("Added successfully");
      } else {
        newDebts = debts.map((debt) => {
          if (debt.id === selected) {
            return newDebt;
          } else {
            return debt;
          }
        });
        toast.success("Edited successfully");
      }
      localStorage.setItem(DEBTS, JSON.stringify(newDebts));

      setDebts(newDebts);
      handleClose();
    } else {
      setValidated(true);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      handleClose();
    } else {
      setValidated(true);
    }
  };

  const handleDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setDebt({
      name: "",
      deadline: "",
      amount: "",
      phone: "",
      description: "",
    });
    setSelected(null);
  };

  const editDebt = (id) => {
    let debt = debts.find((el) => el.id === id);
    setDebt(debt);
    setSelected(id);
    setShow(true);
  };

  const deleteDebt = (id) => {
    let checkDelete = window.confirm("Are you sure you want to delete ? ");

    if (checkDelete) {
      let newDebts = debts.filter((el) => el.id !== id);
      localStorage.setItem(DEBTS, JSON.stringify(newDebts));

      setDebts(newDebts);
      toast.success("Deleted successfully");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  //! costs

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="home" element={<Home debts={debts} />} />

          {/* costs */}
          <Route
            path="costs"
            element={
              <Costs
                show={show}
                costs={costs}
                submit={submit}
                validated={validated}
                handleShow={handleShow}
                handleClose={handleClose}
              />
            }
          />
          <Route
            path="debts"
            element={
              <Debts
                debt={debt}
                show={show}
                debts={debts}
                handleClose={handleClose}
                handleShow={handleShow}
                validated={validated}
                handleSubmit={handleSubmit}
                handleDebt={handleDebt}
                editDebt={editDebt}
                selected={selected}
                deleteDebt={deleteDebt}
                search={search}
                handleSearch={handleSearch}
                ref={searchRef}
              />
            }
          />
          <Route path="debts/:debtId" element={<Debt debts={debts} />} />
        </Route>

        <Route path="*" element={<NotFaund />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
