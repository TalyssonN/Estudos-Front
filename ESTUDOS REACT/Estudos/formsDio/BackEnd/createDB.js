import mongoose from 'mongoose';



export async function connectDB() {
    try{

        await mongoose.connect('mongodb://localhost:27017/users/Clientes');
        console.log('Conectado ao banco de dados MongoDB.');
    }
    catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

