import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

const searchApi = async (name, passorwd) => {
    try {
        const response = await axios.get(`mongodb://localhost:27017/users/Clientes/search`, {
            params: {
                name: name,
                password: passorwd
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
};

