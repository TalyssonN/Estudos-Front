import './input.css';


function Input({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <input type="text" placeholder="Usuário" className="inputText" value={value} onChange={onChange}/>;
}

export default Input;