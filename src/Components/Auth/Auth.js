import React, { useState } from "react";
import { Button } from "@material-ui/core";
import app from "../../Firebase";
import './Auth.css'

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function hadleLogin() {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.error(error));
  }

  function hadleRegistr() {
    app.auth().createUserWithEmailAndPassword(email, password);
  }

  return (
    <div className="Auth">
      <div>
        <h1>Авторизация</h1>
        <form className="AuthForm" action>
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
          <Button onClick={hadleLogin} variant="contained" color="primary">
            Войти
          </Button>
          <Button
            onClick={hadleRegistr}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Регистрация
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Вход с помощью гугл
          </Button>
        </form>
      </div>
    </div>
  );
}
