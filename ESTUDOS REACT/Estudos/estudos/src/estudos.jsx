
import { useState, useEffect, useCallback } from "react";

/*





    const Estudos = () => {
        const [name, setName] = useState("Talysson");

        const handleChangeName = () => {
            setName(prev => prev === "Talysson" ? "Maria" : "Talysson");
        }
        // PREV = Pega o valor anterior do estado,
            Name = Estado, setName = Função para atualizar o estado

        useEffect(() => {
            console.log("O nome foi atualizado para:", name);
        }, [name]);
         //useEffect = Executa um efeito colateral (side effect) após a renderização do componente.
        No caso, ele registra no console sempre que o estado 'name' for atualizado. Usar para realizar alguma função que dependa de uma determinada
        ação de mudança de estado.
        

        //useCallback = Retorna uma versão memoizada da função que só muda se uma das dependências tiverem mudado.
        Útil para otimizar o desempenho de componentes filhos que dependem de funções passadas como props. 
        const memoizedCallback = useCallback(() => {
            setName(prev => prev === "Talysson" ? "Maria" : "Talysson");
        }, []);

        return <div>
            <h1>Olá, {name}!</h1>
            <button onClick={handleChangeName}>Mudar Nome</button>

        </div>;
    }

    export default Estudos;
*/

