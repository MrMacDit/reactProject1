import React, { Fragment, useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Home = () => {
  let [outDummy, inDummy] = useState([
    {
      Title: "Still",
      Amount: 250,
      Date: new Date(2022, 6, 14),
      id: "e1",
    },
    {
      Title: "Under",
      Amount: 150,
      Date: new Date(2022, 6, 14),
      id: "e2",
    },
    {
      Title: "Construction",
      Amount: 250000,
      Date: new Date(2022, 0, 14),
      id: "e3",
    },
  ]);

  const dataFromSignUp = (hereComesSignUp) => {
    inDummy((prevDummy) => {
      const mergedData = [...prevDummy];
      mergedData.unshift(hereComesSignUp);
      return mergedData
    });
  };

  const deleteLists = (pleaseJustDelete) => {
    inDummy((prevDummy) => {
      const unMergeData = prevDummy.filter(deletingPurchase => deletingPurchase.id !== pleaseJustDelete)
      return unMergeData
    })
  }


  return (
    <Fragment>
      <section>
      <ExpenseForm onGetSignUp={dataFromSignUp} />
      </section>
      <ExpenseItem data={outDummy} nowDelete={deleteLists}/>
    </Fragment>
  );
};
export default Home;
