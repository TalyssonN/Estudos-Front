import React from "react";
import "./system.css"; // Importando o CSS para estilização

const System = () => {
    return (
        <div className="containerSystem">
            <div className="menuOptions">
                <h2 className="titleSystem">Sistema de Mensagens</h2>
                <ul className="listOptions">
                    <li className="optionItem">Início</li>
                    <li className="optionItem">Mensagens</li>
                    <li className="optionItem">Contatos</li>
                    <li className="optionItem">Configurações</li>
                </ul>
            </div>
            <div className="userInfo">
                <h2 className="titleChat">Chat</h2>
                <div className="messages">
                    <div className="message">Mensagem 1</div>
                    <div className="message">Mensagem 2</div>
                    <div className="message">Mensagem 3</div>
                </div>
                <input type="text" placeholder="Digite sua mensagem" className="inputMessage" />
            </div>
        </div>
    );
}

export default System;