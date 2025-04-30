import React from "react";
import "./home.css"; // Importando o CSS para estilização
const Login = () => {
  return (
    <div className="loginPage">
        <h1 className="nameLogin">SCP Mensage</h1>
        <h2 className="login_h2">Login</h2>
        <form>
            <input type="text" placeholder="Usuário"  className="inputUser"/>
            <input type="password" placeholder="Senha" className="inputPassword"/>
            <button type="submit" className="buttonLogin">Entrar</button>
        </form>

        <p important className="msgAtention">Não Compartilhe seu Usuário ou Senha!</p>
    </div>
  );
};

export default Login;