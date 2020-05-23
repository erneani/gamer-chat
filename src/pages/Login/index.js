import React, { useState } from "react";

import {
  LoginContainer,
  LoginCard,
  CardTitle,
  CardInputGroup,
  CardInputLabel,
  CardInput,
  CardInputHelper,
  CardButton,
  CardError,
} from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const applyLoading = (func) => {
    setLoading(true);
    func();
    setLoading(false);
  };

  const handleLogin = (event) => {
    if (username.length < 5) {
      setLoginError("o usuário deve ter mais de 5 letras");
    } else {
      setLoginError(false);
    }
  };

  const handleChange = (event) => {
    console.log(username);
    setUsername(event.target.value);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <CardTitle>entrar no chat</CardTitle>
        <CardInputGroup>
          <CardInputLabel>insira seu nome</CardInputLabel>
          <CardInput
            id="loginInput"
            value={username}
            onChange={(event) => handleChange(event)}
            type="text"
            placeholder="digite seu nome aqui"
            error={loginError}
          />
          {loginError && <CardError>{loginError}</CardError>}
          <CardInputHelper>ex: destruidor_de_planetas_25</CardInputHelper>
        </CardInputGroup>
        <CardButton
          onClick={() => applyLoading(handleLogin)}
          disabled={isLoading}
        >
          acessar
        </CardButton>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
