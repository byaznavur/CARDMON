import React from "react";
import { IoWalletOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { FcDebt } from "react-icons/fc";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <nav className="container bg-primary p-2 rounded-top-4  d-flex  align-items-center justify-content-between">
        <Link
          className="logo text-white fw-bold  d-flex aling-items-center"
          to="/"
        >
          Cardmon{" "}
          <span>
            <IoWalletOutline />
          </span>
        </Link>

        <ul className="d-flex  align-items-center justify-content-between m-0 p-0 gap-3">
          <li>
            <Link className="text-white" to="/home">
              <FaHome />{" "}
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/costs">
              <TbReportMoney />
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/debts">
              <FcDebt />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
