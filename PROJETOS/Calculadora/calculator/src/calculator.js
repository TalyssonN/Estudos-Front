import { useState } from "react";
import { Button } from "@/components/ui/button";

const Calculadora= () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput("Erro");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-white rounded-2xl shadow-lg">
      <div className="text-right text-2xl mb-4 p-2 border rounded bg-gray-100 min-h-[48px]">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {"789/456*123-0.=+".split("").map((char) => (
          <Button key={char} onClick={() => handleClick(char)}>{char}</Button>
        ))}
        <Button className="col-span-2" onClick={handleClear}>C</Button>
        <Button className="col-span-2" onClick={handleEqual}>=</Button>
      </div>
    </div>
  );
}

export default Calculadora;