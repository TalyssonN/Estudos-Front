import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do react-router-dom para navegação entre páginas
import "./system.css"; // Importando o CSS para estilização


const System = () => {
    return (
        <div className="containersystem">
            <h1>Menu</h1>
            <nav className="menu">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/menu">Menu</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default System;