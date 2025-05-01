import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do react-router-dom para navegação entre páginas
import "./system.css"; // Importando o CSS para estilização


const System = () => {
    return (
        <div className="containersystem">
            <h1>Menu</h1>
            <nav className="menu">
                <ul>
                    <li className="profileLink linkSysGeral"><Link to="/profile">Profile</Link></li> {/* Link para a página de perfil */}
                    <li className="chatLink linkSysGeral"><Link to="/chat">Chat</Link></li> {/* Link para a página de chat */}
                    <li className="linkNotepad linkSysGeral"><Link to="/notepad">Anotações</Link></li>{/* Link para o bloco de notas */}
                    <li className="loginLink linkSysGeral"><Link to="/login">Sair</Link></li> {/* Link para a página de login */}
                </ul>
            </nav>
        </div>
    );
}

export default System;