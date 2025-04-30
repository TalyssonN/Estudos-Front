import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do react-router-dom para navegação entre páginas
import "./login.css"; // Importando o CSS para estilização
const Login = () => {
  return (
    <div className="loginPage">
        <form className="formLogin">
          <h1 className="nameLogin">SCP Mensage</h1>
          <h2 className="login_h2">Login</h2>
          <input type="text" placeholder="Usuário"  className="inputUser"/>
          <input type="password" placeholder="Senha" className="inputPassword"/>
          <button type="submit" className="buttonLogin">
            <Link to="system" className="buttonLogin">Entrar</Link>
          </button>
          
          <p important className="msgAtention">Não Compartilhe seu Usuário ou Senha!</p>
        </form>

    </div>
  );
};

export default Login;