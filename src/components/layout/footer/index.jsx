import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white  text-center rounded-bottom-4  "
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <div className="container bg-primary rounded-bottom-4   d-flex justify-content-center align-items-center py-2">
        Made by Abdulaziz
      </div>
    </footer>
  );
};

export default Footer;
