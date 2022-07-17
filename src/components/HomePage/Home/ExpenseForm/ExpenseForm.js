import React, { useState } from "react";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import style from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  let [outTitles, inTitles] = useState("");
  let [outAmount, inAmount] = useState("");
  // let [outDate, inDate] = useState("");

  const ChangeTitle = (event) => {
    inTitles(event.target.value);
  };

  const ChangeAmount = (event) => {
    inAmount(event.target.value);
  };

  // const ChangeDate = (event) => {
  //   inDate(event.target.value);
  // };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const collectedData = {
      Title: outTitles,
      Amount: parseFloat(outAmount),
      // Date: new Date(outDate),
      id: Math.random().toString()
    };
    props.onGetSignUp(collectedData);
    inTitles("")
    inAmount("")
    // inDate("")
  };

  return (
    <Card className={style.expensForm}>
      <form onSubmit={FormSubmitHandler}>
        <div className={style.containing}>
          <label htmlFor="ttls">Title</label>
          <input type="text" id="ttls" onChange={ChangeTitle} value={outTitles}/>
        </div>
        <div className={style.containing}>
          <label htmlFor="amnt">Amount</label>
          <input
            type="number"
            step="0.01"
            min="0.00"
            id="amnt"
            value={outAmount}
            onChange={ChangeAmount}
          />
        </div>
        {/* <div className={style.containing}>
          <label htmlFor="dt">Date</label>
          <input
            type="date"
            id="dt"
            min="2019-01-01"
            max="2024-12-31"
            onChange={ChangeDate}
          />
        </div> */}
        <div className={style.bttn}>
          <Button type="submit">Enter</Button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
