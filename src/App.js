import React, { useEffect, useState } from "react";
import Home from "./components/HomePage/Home/HomeDisplay/Home";
import LogInFormInput from "./components/HomePage/LogIn/LogInFormInput";
import NavTitle from "./components/HomePage/NavBar/NavTitle";
const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const usersLoggedInInformationsStored = localStorage.getItem("isLogged")
    if (usersLoggedInInformationsStored === "1") {
      setIsLoggedIn(true);
    }
  }, [])
  const dataFromLogIn = () => {
    localStorage.setItem("isLogged", "1")
    setIsLoggedIn(true);
  };

  const logMeOut = () => {
    localStorage.removeItem("isLogged")
    setIsLoggedIn(false);
  }
  
  
  return (
    <React.Fragment>
      <NavTitle onSignOut={!isLoggedIn} onNavLists={isLoggedIn} onGetLogOut={logMeOut}/>
      <main>
      {isLoggedIn && <Home />}
      {!isLoggedIn && <LogInFormInput onGetLogIn={dataFromLogIn} />}
      </main>
    </React.Fragment>
  );
};
export default App;
