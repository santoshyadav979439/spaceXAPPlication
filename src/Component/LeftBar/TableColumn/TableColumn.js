import React from 'react';
import classes from './TableColumn.module.css'
const TableColumn = (props) => {
    console.log(props);
    return (
        <td onClick={props.yearClick}
        style={{background:props.color}}
        >
            {props.year}
        </td>
    );
};

export default TableColumn;