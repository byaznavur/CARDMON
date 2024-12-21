import React, { useRef, useState } from "react";
import "./App.css";
import { v4 } from "uuid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Costs from "./pages/Costs";
import Debts from "./pages/Debts";
import Layout from "./components/layout/index";
import NotFaund from "./pages/NotFaund";
import Login from "./pages/Login";
import { DEBTS } from "./constants";
import { toast } from "react-toastify";
import Debt from "./pages/Debt";

const App = () => {
  const [debts, setDebts] = useState(
    JSON.parse(localStorage.getItem(DEBTS)) || [
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
    ]
  );
  const [selected, setSelected] = useState(null);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [debt, setDebt] = useState({
    name: "",
    deadline: "",
    amount: "",
    phone: "",
    description: "",
  });
  const [search, setSearch] = useState("");
  const searchRef = useRef();
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="home" element={<Home debts={debts} />} />
          <Route path="costs" element={<Costs />} />
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
