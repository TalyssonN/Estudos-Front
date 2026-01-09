import './inputText.css'
const InputText = ({name, setName, password, setPassword}: {name: string, setName: (value: string) => void, password: string, setPassword: (value: string) => void}) => {
    
    
    return  (
    <div className="inputTextContainer">

        <input type="text" placeholder="Digite seu nome" className="textUser inputText" value={name} onChange={(e) => setName(e.target.value)} required/>

        <input type="password" placeholder="Digite sua senha" className="textPassword inputText" value={password} onChange={(e) => setPassword(e.target.value)} required/>

    </div>

)

}

export default InputText