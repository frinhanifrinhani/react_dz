const TemplateExpressions = () => {

    const name = 'Thiago';
    const data = {
        age: 33,
        job: "Programmer",
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h2>Você atua com: {data.job}</h2>
        </div>
    );
};

export default TemplateExpressions;