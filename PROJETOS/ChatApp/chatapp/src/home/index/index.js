import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Importando o CSS para estilização
const Home = () => {
  return (
    <div className="containerHome">
      <div className="cardHome">
        <h2>Bem-vindo ao SCP Mensage!</h2>
        <p>Chat empresarial de forma privada e segura.</p>
        <p important className="msgAtention">Não Compartilhe seu Usuário ou Senha!</p>
        <button className="buttonHome">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;