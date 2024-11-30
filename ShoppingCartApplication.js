class Cart{
    constructor(cena, ilosc){
        this.lista = []
        this.cena = cena
        this.ilosc = ilosc
    }
    addProduct(...products){
        this.lista.push(...products, this.cena, this.ilosc)

        
    }
    
    removeProduct(n,c,i){
        this.lista = this.lista.filter(x => x !== n) //filtruje liste i pokazuje bez podanego slowa
        this.lista = this.lista.filter(x=> x !== c)
        this.lista = this.lista.filter(x => x !== i)
    }

    pokazListe(){
        console.log(`lista produktow: ${this.lista}`)
    }
}
const koszyk = new Cart()

koszyk.addProduct("woda", 5, 1)
koszyk.addProduct("zeszyt", 5, 1)
koszyk.addProduct("długopis", 2, 1)

koszyk.removeProduct("długopis", 2, 1)


koszyk.pokazListe()

