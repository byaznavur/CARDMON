import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ debts }) => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    const total = debts.reduce((acc, el) => acc + el.amount, 0);
    setSum(total);
  }, [debts]);

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
      </section>
    </div>
  );
};

export default Home;
