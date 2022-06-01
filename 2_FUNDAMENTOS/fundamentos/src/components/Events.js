const Events = () => {

    const handleMyEvent = (e) => {

        console.log(e);

        console.log("Ativou o evento!");
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizou com X</h1>
        }else{
            return <h1>Renderizou sem X</h1>
        }

    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Ciquei aqui!</button>

                <button onClick={() => {console.log('Clicou')}}>Ciquei aqui!</button>

                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
};

export default Events