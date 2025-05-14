import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function Register() {
  return (
    <div className="register-section">
      <h2>Registrar-se</h2>
      <p>Ainda não é associado? Registre-se aqui mesmo!</p>
      <form>
        <div className="input-group">
          <FaUser />
          <input type="text" placeholder="Usuário" />
        </div>
        <div className="input-group">
          <FaLock />
          <input type="password" placeholder="Senha" />
        </div>
        <div className="input-group">
          <FaLock />
          <input type="password" placeholder="Repita a senha" />
        </div>
        <div className="input-group">
          <FaEnvelope />
          <input type="email" placeholder="E-mail" />
        </div>
        <button className="btn register-btn">REGISTRAR-SE</button>
      </form>
    </div>
  );
}
