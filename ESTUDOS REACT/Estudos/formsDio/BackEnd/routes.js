import express from 'express';
import {connectDB } from './createDB.js';

const app = express();

app.use(express.json());

app.post('/search', (req, res) => {
    const { name, password } = req.body;
    // Aqui você pode adicionar a lógica de autenticação
    if (!name || !password) {
        return res.status(400).json({ message: 'Dados Inválidos' });
    }
});