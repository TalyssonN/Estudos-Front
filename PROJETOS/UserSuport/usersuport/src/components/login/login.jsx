import react from "react";

import "./login.css";

import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <div className="login-section">
      <h2>Login</h2>
      <p>Já tem uma conta? Entre agora!</p>
      <form>
        <div className="input-group">
          <FaUser />
          <input type="text" placeholder="Usuário" />
        </div>
        <div className="input-group">
          <FaLock />
          <input type="password" placeholder="Senha" />
        </div>
        <button className="btn login-btn">ENTRAR</button>
      </form>
    </div>
  );
}




  
