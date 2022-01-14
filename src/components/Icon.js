import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

function Icon(props) {
  const { name } = props;
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon" />;
    case "cross":
      return <FaTimes className="icon" />;
    default:
      return <FaPen className="icon" />;
  }
}

export default Icon;
