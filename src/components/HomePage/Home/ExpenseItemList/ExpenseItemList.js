import React from "react";
import style from "./ExpenseItemList.module.css";

const ExpenseItemList = (props) => {
  const deletion = () => {
    props.onDeletes(props.id)
  }
  return (
    <li className={style.itemLists} onClick={deletion}>
      {props.children}
    </li>
  );
};

export default ExpenseItemList;
