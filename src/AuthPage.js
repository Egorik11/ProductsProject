import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { Button } from "@material-ui/core";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = useCallback(
    async () => {
      try {
        await app
        .auth()
        .signInWithEmailAndPassword(email, password)
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password]
  );

  const handleRegistr = useCallback(
    async () => {
      try {
        await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Auth">
      <div>
        <h1>Авторизация</h1>
        <form className="AuthForm">
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} variant="contained" color="primary">
            Войти
          </Button>
          <Button
            onClick={handleRegistr}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Регистрация
          </Button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
