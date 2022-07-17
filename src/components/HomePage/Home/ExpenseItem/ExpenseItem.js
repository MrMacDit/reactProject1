import React from "react";
import ExpenseItemList from "../ExpenseItemList/ExpenseItemList";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <ul className={styles.items}>
      {props.data.map((purchases) => (
        <ExpenseItemList
          key={purchases.id}
          id={purchases.id}
          onDeletes={props.nowDelete}
        >
          {purchases.Title}
          #{purchases.Amount}
          {/* {purchases.Date} */}
        </ExpenseItemList>
      ))}
    </ul>
  );
};
export default ExpenseItem;
