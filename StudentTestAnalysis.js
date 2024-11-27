const students = [
    {imie: "Igor", wynik: 97},
    {imie: "Mikołaj", wynik: 40},
]

function srednia(scores){
    const avg = scores.reduce((a,b) => a+b, 0) / scores.length
    return avg
}
function min(scores){
    return Math.min(...scores);
}
function max(scores){
    return Math.max(...scores);
}

const scores = students.map((student) => student.wynik)

console.log(`srednia wynosi: ${srednia(scores)}`)
console.log(`najmniejszy wynik to: ${min(scores)}`)
console.log(`najwiekszy wynik to: ${max(scores)}`)
