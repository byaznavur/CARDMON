import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ debts, costs }) => {
  const [sum, setSum] = useState(0);
  const [sumCosts, setSumCosts] = useState(0);
  useEffect(() => {
    const total = debts.reduce((acc, el) => acc + el.amount, 0);
    setSum(total);
  }, [debts]);
  useEffect(() => {
    const totalCosts = costs.reduce((acc, el) => acc + el.price, 0);
    setSumCosts(totalCosts);
  }, [costs]);

  return (
    <div className="container">
      <section className="">
        <h2 className="text-center">Debtors</h2>

        <div>
          <ul className="p-0">
            {debts.map((debt, index) => (
              <li
                className="d-flex m-0 w-100 justify-content-between align-items-center"
                key={index}
              >
                <p className="fw-bold fs-4">{debt.name}</p>{" "}
                <span className="fw-bold fs-4 badge bg-danger">
                  {" "}
                  {debt.amount}$
                </span>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary fw-bold w-100" to="/debts">
            Add or Remove ({sum})$
          </Link>
        </div>

        <div>
          <ul className="p-0 mt-3">
            {costs.map((cost, index) => (
              <li
                className="d-flex m-0 w-100 justify-content-between align-items-center"
                key={index}
              >
                <p className="fw-bold fs-4">{cost.title}</p>{" "}
                <span className="fw-bold fs-4 badge bg-danger">
                  {" "}
                  {cost.price}$
                </span>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary fw-bold w-100" to="/costs">
            Add or Remove ({sumCosts})$
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
