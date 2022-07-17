import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import style from "./LogInFormInput.module.css";

const LogInFormInput = (props) => {
  let [outMail, inMail] = useState("");
  let [outPass, inPass] = useState("");
  let [validateForm, setValidateForm] = useState(false);
  let [outEmailBlurValidation, emailBlurValidation] = useState();
  let [outPasswordBlurValidation, passwordBlurValidation] = useState();

  useEffect(() => {
    setValidateForm(outMail.includes("@") && outPass.trim().length > 6);
  }, [outMail, outPass]);
  const mailChange = (event) => {
    inMail(event.target.value);
  };

  const passChange = (event) => {
    inPass(event.target.value);
  };

  const validateEmail = () => {
    emailBlurValidation(outMail.includes("@"));
  };

  const validatePassword = () => {
    passwordBlurValidation(outPass.trim().length < 6)
  }

  const FormSubmit = (event) => {
    event.preventDefault();
    const inflatedData = {
      email: outMail,
      password: outPass,
    };
    props.onGetLogIn(inflatedData);
  };

  return (
    <Card className={style.loginStyle}>
      <form onSubmit={FormSubmit}>
        <div className={`${style.contents} ${outEmailBlurValidation === false ? style.invalid : ''}`}>
          <label htmlFor="mail">Email</label>
          <input
            id="mail"
            type="text"
            placeholder="example@submit"
            onChange={mailChange}
            onBlur={validateEmail}
          />
        </div>
        <div className={`${style.contents} ${outPasswordBlurValidation === false ? style.invalid : ''}`}>
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
