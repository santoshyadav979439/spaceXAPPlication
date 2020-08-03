import React from "react";
import classes from "./TableColumn.module.css";
const TableColumn = (props) => {
  return props.year ? (
    <td onClick={props.yearClick} style={{ background: props.color }}>
      {props.year}
    </td>
  ) : null;
};

export default TableColumn;
