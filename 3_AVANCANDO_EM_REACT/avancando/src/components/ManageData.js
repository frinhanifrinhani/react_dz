import { useState } from "react";

const ManageData = () => {
    let someData = 10;
    //console.log(someData);

    const [number, setNumber] = useState(15);
    console.log(number);

    return (
    
    <div>
        <div>
            <p>Valor A: {someData}</p>
            <button onClick={() => (someData = 15) }>Mudar variável</button>
        </div>
        <div>
            <p>Valor B: {number}</p>
            <button onClick={() => setNumber(25) }>Mudar variável</button>
        </div>

    </div>
  )
}

export default ManageData;
