import React from "react";

import PropTypes from "prop-types";

import { FaEdit } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CostCard = ({ title, desc, editCost, id, price, day, deleteCost }) => {
  return (
    <div className="alert w-100 alert-warning p-2 d-flex align-items-center justify-content-between">
      <div>
        <h5>
          {title} <span className="badge fs-7 bg-success">{price} $</span>
        </h5>
        <div>
          <time className="fs-10">{day}</time>
        </div>
      </div>
      {/* <p>{children.slice(0, 10)}...</p> */}
      <div>
        <button onClick={() => editCost(id)} className="btn btn-primary me-2">
          <FaEdit />
        </button>
        <button onClick={() => deleteCost(id)} className="btn btn-danger me-2">
          <MdDelete />
        </button>
        <Link to={`/costs/${id}`} className="btn btn-warning">
          <LuMessageCircleMore />
        </Link>
      </div>
    </div>
  );
};

CostCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  day: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.node,
};

export default CostCard;
