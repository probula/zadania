class Calculator{
    
    static add(a,b){
        return a+b;
    }
    static substract(a,b){
        return a-b
    }
    static multiply(a,b){
        return a*b
    }
    static divide(a,b){
        return a/b
    }
}
console.log(`wynik dodawania to: ${Calculator.add(5,5)}`);
console.log(`wynik odejmowania to: ${Calculator.substract(5,5)}`);
console.log(`wynik mnozenia to: ${Calculator.multiply(5,5)}`);
console.log(`wynik dzielenia to: ${Calculator.divide(5,5)}`);

