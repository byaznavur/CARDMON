import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";

const DebtCard = ({
  id,
  name,
  deadline,
  amount,
  phone,
  description,
  children,
}) => {
  return (
    <div className="alert w-100 alert-warning p-2 d-flex align-items-center justify-content-between">
      <div>
        <h5>
          {name} <span className="badge fs-7 bg-success">{amount} $</span>
        </h5>
        <div>
          <time className="fs-10">{deadline}</time>
        </div>
      </div>
      {/* <p>{children.slice(0, 10)}...</p> */}
      <div>
        <button className="btn btn-primary me-2">
          <FaEdit />
        </button>
        <button className="btn btn-danger me-2">
          <MdDelete />
        </button>
        <Link to={`/debts/${id}`} className="btn btn-warning">
          <LuMessageCircleMore />
        </Link>
      </div>
    </div>
  );
};

DebtCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  deadline: PropTypes.string,
  phone: PropTypes.string,
  amount: PropTypes.number,
  description: PropTypes.node,
};

export default DebtCard;
