it('sem testes ainda', () => {});

const getSomething = () => 10;

const system = () => {
    console.log('Init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('End');
}

system();