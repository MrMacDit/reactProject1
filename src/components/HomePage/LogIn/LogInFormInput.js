import React, { useEffect, useReducer, useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import style from "./LogInFormInput.module.css";

// UseReducer for Email
const emailFunction = (state, action) => {
  if (action.type === "collectEmail") {
    return {value: action.val, isValid: action.val.includes("@") }
  }
  if (action.type === "emailValidity") {
    return{value: state.value, isValid: state.value.includes("@")}
  }

  return{value: "", isValid: null}
}

// UseReducer for Password
const passwordFunction = (state, action) => {
  if (action.type === "collectPassword") {
    return{value: action.val, isValid: action.val.trim().length > 6}
  }
  if (action.type === "passwordValidity") {
    return{value: state.value, isValid: state.value.trim().length > 6}
  }

  return{value: "", isValid: null}
}
const LogInFormInput = (props) => {
  let [outMail, inMail] = useState("");
  let [outPass, inPass] = useState("");
  let [validateForm, setValidateForm] = useState(false);

  const {isValid: emailValid} = emailState;
  const {isValid: passwordValid} = passwordState
  useEffect(() => {
    setValidateForm(emailValid && passwordValid);
  }, [emailValid, passwordValid]);


  const mailChange = (event) => {
    emailStateFunction({type: "collectEmail", val:event.target.value});
    // setValidateForm(event.target.value.includes("@") && outPass.trim().length > 6)
  };

  const passChange = (event) => {
    passwordStateFunction({type: "collectPassword", val:event.target.value})
    // setValidateForm(event.target.value.trim().length > 6 && outMail.includes("@"))
  };

  const validateEmail = () => {
    emailStateFunction({type: "emailValidity"})
  };

  const validatePassword = () => {
    passwordStateFunction({type: "passwordValidity"})
  }

  const FormSubmit = (event) => {
    event.preventDefault();
    const inflatedData = {
      email: emailState.value,
      password: passwordState.value
    };
    props.onGetLogIn(inflatedData);
  };

  return (
    <Card className={style.loginStyle}>
      <form onSubmit={FormSubmit}>
        <div className={`${style.contents} ${emailState.isValid === false ? style.invalid : ''}`}>
          <label htmlFor="mail">Email</label>
          <input
            id="mail"
            type="text"
            placeholder="example@submit"
            onChange={mailChange}
            onBlur={validateEmail}
          />
        </div>
        <div className={`${style.contents} ${passwordState.isValid === false ? style.invalid : ''}`}>
          <label htmlFor="pass">Password</label>
          <input
            id="pass"
            type="password"
            placeholder="contains atleast 6 characters"
            onChange={passChange}
            onBlur={validatePassword}
          />
        </div>
        <div className={style.btn}>
          <Button type="submit" disabled={!validateForm}>
            LogIn
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default LogInFormInput;
