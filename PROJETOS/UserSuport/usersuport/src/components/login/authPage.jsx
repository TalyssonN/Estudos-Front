import Login from "C:/Users/talys/OneDrive/Documentos/GitHub/Estudos-Front/PROJETOS/UserSuport/usersuport/src/components/login/login.jsx";
import Register from "C:/Users/talys/OneDrive/Documentos/GitHub/Estudos-Front/PROJETOS/UserSuport/usersuport/src/components/login/register.jsx";
import "./auth.css";

export default function AuthPage() {
  return (
    <div className="auth-wrapper">
      <Login />
      
      <Register />
    </div>
  );
}
