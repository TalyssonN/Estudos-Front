const fs = require('fs');

const arquivoTexto = 'C:/Users/talys/WebstormProjects/Estudos-Front/tarefas.csv'


async function buscarArquivo() {
   

    try {
        const arquivo = await fs.promises.readFile(arquivoTexto, 'utf-8');
        console.log(arquivo);
    }catch (error) {
        console.error('Erro ao ler o arquivo:', error);
    }finally{
        console.log('Operação concluída!')
    }
}
buscarArquivo()