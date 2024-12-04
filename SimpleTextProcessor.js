const processText = (text, {uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{
    let tekst = text;
    if(uppercase){
        tekst = text.toUpperCase()
        // console.log(`wyraz z duzych liter: ${tekst}`)
    }
    if(reverse){
        tekst = [...tekst].reverse().join("") //rozdziela na litery, odwraca, łączy i usuwa przecinki
        //console.log(`wyraz w odwrotnej kolejnosci: ${tekst2}`)
    }
    if(removeSpecialChars){
        tekst = tekst.replace(/[\W_]/g, ""); //zamienia wszystkie znaki specjalne na puste ""
        //console.log(`wyraz z usunietymi znakami specjalnymi ${tekst}`)
    }
    console.log(`wyraz: ${tekst}`)
}
const text = "tE$StOWY&&"

processText(text, {uppercase: true, reverse: false, removeSpecialChars: true})


