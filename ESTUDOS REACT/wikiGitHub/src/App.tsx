import { useState } from 'react'
import './App.css'
import Input from './components/input/input'
import ItemRepo from './components/repo/itemrepo'
function App() {

  const [respos, setRespos] = useState<any[]>([]);
  const [currentRepo, setCurrentRepo] = useState('');
  const handleSearchRepo = async () => {
    // Lógica para buscar repositórios do GitHub

    const response = await fetch(`https://api.github.com/repos/${currentRepo}`)
    const data = await response.json()

    if(data.id){
      setRespos(prev => [...prev, data]);
    }
  }

  return (
    <>
      <div className="App text-white">
        <h1  className='h1Name'>GitHub Wiki</h1>
        <p className='description'>Pesquise por repositórios do GitHub</p>
        <div className='ContainerUtilities'>

          <div className='inputContainer'>
            <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
          </div>
          <div className='buttonContainer'>
            <button className='btnSearch' onClick={handleSearchRepo}>Pesquisar</button>
          </div>

        </div>

        {respos.map(repo => (
          <ItemRepo />
        ))}
      </div>
    </>
  )
}

export default App
