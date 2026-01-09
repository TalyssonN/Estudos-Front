import { useState } from 'react'
import './button.css'
type ButtonProps = {
    onClick: () => void
}
const Button = ({ onClick }: ButtonProps) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')


    const handleClick = () => {
        console.log(`Nome: ${user} \nSenha: ${password}`)
    }
    return <button type="submit" className='buttonStyle' onClick={onClick}>Logar</button>
}

export default Button