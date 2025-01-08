import React from "react";
import { useParams } from "react-router-dom";

const Cost = ({ costs }) => {
  const { costId } = useParams();
  const { title, price, day, description } = costs.find(
    (cost) => cost.id === costId
  );
  return (
    <div className="container d-flex flex-wrap align-items-center gap-2">
      <h2>{title}</h2>
      <p className="m-0">
        Price: <span className="badge bg-warning">{price}$</span>
      </p>
      <p className="m-0">
        Day: <span className="badge bg-success">{day}$</span>
      </p>

      <p className="m-0">{description}</p>
    </div>
  );
};

export default Cost;
