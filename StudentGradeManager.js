class Student{
    constructor(name, age, grade){
        this.name = name
        this.age = age
        this.grade = grade || [] //jezeli liczba lub inna wartosc - doda do tablicy, jezeli nie to tablica bedzie pusta
    }

    addGrade(...oceny){ //rest - przyjmuje dowolna ilosc ocen
        this.grade.push(...oceny) //dodaje do tablicy oceny
    }
    
    info(){
        console.log(`imie: ${this.name}, wiek: ${this.age}, Oceny: ${this.grade}`);
    }

    getAverage(){
        const suma = this.grade.reduce((acc, num) => acc + num, 0) / this.grade.length; //acc - akumulator z suma elementow, num - obecny element, 0 - poczatkowa wartosc. 0+2=2, 2+4=6...13+6=19/5 = 3.8
        
        console.log(`srednia: ${suma}`)
    }
}
const os1 = new Student("Jan", 45) //tworzy obiekt osoby
os1.addGrade(2,4,1,6,6) //dodaje oceny do tablicy
os1.info() //wywoluje
os1.getAverage() //wywoluje
