class Cart{
    constructor(cena, ilosc){
        this.lista = []
        this.cena = cena
        this.ilosc = ilosc
    }
    addProduct(newProduct){
        this.lista.push(newProduct)
        console.log(this.lista)

        
    }
    
    // removeProduct(n,c,i){
    //     this.lista = this.lista.filter(x => x !== n) //filtruje liste i pokazuje bez podanego slowa
    //     this.lista = this.lista.filter(x=> x !== c)
    //     this.lista = this.lista.filter(x => x !== i)
    // }

    pokazListe(){
        this.lista.forEach(p => console.log(`${p.name}, ${p.cena}`))
    }
}
const koszyk = new Cart()

koszyk.addProduct({name:"woda", cena:5, ilosc:1})
koszyk.addProduct({name:"zeszyt", cena:5, ilosc:1})
koszyk.addProduct({name:"długopis", cena:2, ilosc:1})

// koszyk.removeProduct("długopis", 2, 1)


koszyk.pokazListe()

