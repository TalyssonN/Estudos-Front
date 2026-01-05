import { useState } from 'react'
import './button.css'

const Button = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')


    const handleClick = () => {
        console.log("Botão clicado!");
    }
    return <button type="submit" className='buttonStyle' onClick={handleClick}>Logar</button>
}

export default Button