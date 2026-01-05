import './inputText.css'

const InputText = () => {
    return     <>
    <div className="inputTextContainer">

        <input type="text" placeholder="Digite seu nome" className="textUser inputText"/>

        <input type="password" placeholder="Digite sua senha" className="textPassword inputText" />

    </div>

    </>

}

export default InputText