const Challenge = () => {
    const valorA = 10;
    const valorB = 15;

    const somarValores = () => {
        const soma = valorA+valorB
        console.log("Soma dos valores: " + soma);
    };

    return(
        <div>
            <p>Valor A: {valorA}</p>
            <p>Valor B: {valorB}</p>

            <button onClick={somarValores}>Somar Valores</button>
        </div>
    );
};

export default Challenge;
