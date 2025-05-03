const mongoose = require('mongoose');

async function main() {
    try {

        mongoose.set('strictQuery', true); // Desabilita o modo de consulta estrita (opcional, mas recomendado)
        await mongoose.connect('mongodb+srv://talysson39n:8ag5HQFO9G0I58ga@api.z7dmhlb.mongodb.net/?retryWrites=true&w=majority&appName=Api')

        console.log('Conectado ao MongoDB!');
    }catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

//8ag5HQFO9G0I58ga

module.exports = main;