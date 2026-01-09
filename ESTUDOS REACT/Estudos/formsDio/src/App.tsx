import { useState } from 'react'
import './App.css'
import Button from './components/button/button'
import InputText from './components/inputText/inputText'

function App() {
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const exibir = async () => {
    if (!name || !password) {
      alert('Por favor, preencha todos os campos.')
      return
    }
    
    try{
      const response = await fetch('mongodb://localhost:27017/users/Clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      })

      const data = await response.json()

      if (!response.ok){
        throw new Error(data.message || 'Erro ao fazer login')
      }

      alert(`Bem-vindo, ${data.name}!`)
    } catch (error: any){
      alert(`Erro: ${error.message}`)
    }
  }

  return (
    <>
      <h1>LOGIN / CADASTRO</h1>
      <InputText name={name} setName={setName} password={password} setPassword={setPassword} />
      <Button onClick={exibir} />
    </>
  )
}

export default App
