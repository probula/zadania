const products = [
    {name: "woda", price: 3, category: "napoje"},
    {name: "chleb", price: 10, category: "pieczywo"},
    {name: "czekolada", price: 8, category: "slodycze"},
    
]

const cena1 = [...products].sort(function(a,b){ //a, b - elementy tablicy ktore sa porownywane
    return a.price-b.price //jezeli a < b = <0 to a bedzie PRZED b, jezeli a > b = >0 a bedzie PO b
})

const cena2 = [...products].sort(function(a,b){ //trzeba zrobic spread bo inaczej cena2 nadpisuje cena1
    return b.price-a.price 
})
    
const kategoria = products.filter(function(cat){
    return cat.category == "pieczywo"
})

console.log("---Produkty posortowane od najtanszych: ---")
cena1.forEach(ele => console.log(`Nazwa: ${ele.name}, Cena: ${ele.price}, Kategoria: ${ele.category}`))

console.log("---Produkty posortowane od najdrozszych: ---")
cena2.forEach(ele => console.log(`Nazwa: ${ele.name}, Cena: ${ele.price}, Kategoria: ${ele.category}`))

kategoria.forEach(ele2 => console.log(`Produkty z kategorii: ${ele2.category} to: ${ele2.name}`))
//przchodzi przez kazdy element ceny oraz kategorii, ele to pojedynczy element tablicy

