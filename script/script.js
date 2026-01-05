// Kies een saus

// //bron lamp opdracht

// Onderstaande is voorbeeldcode voor als er maar 1 knop zou zijn

// let deeg = document.getElementById("pizzadeeg") // zet de html img element in een variabele



// let tomatensaus = document.getElementById("tomatensaus") // Sellecteerd het flesje tomatensaus in een variabele

// function tomatensausKnop(){
//         deeg.src = "./img/pizzadeeg_tomatensaus.png" // veranderd de source van het deeg variabele
// }

// tomatensaus.addEventListener('click', tomatensausKnop) // zorgt dat de bovenstaande function uitgevoerd wordt als je op het tomatensausflesje klikt











// Bovenstaande code maar dan DRY
let deeg = document.getElementById("pizzadeeg") // zet de html img element in een variabele

const sauzen = [
    {id: "tomatensaus", img: "./img/pizzadeeg_tomatensaus.png"},
    {id: "bbqsaus", img: "./img/pizzadeeg_bbqsaus.png"},
    {id: "geensaus", img: "./img/pizzadeeg.png"}
]


sauzen.forEach(saus => {
    const knop = document.getElementById(saus.id); // juiste id van het knopje

    knop.addEventListener('click', () => {
        deeg.src = saus.img; // verander het deegplaatje

    });
})












// Volgende en vorige knop

// bron: uitwerkingen die in inhaalklas 2 zijn uitgevoerd

// UL class "Weg" geven
const volgendeKnop = document.getElementById("volgendeKnop") // sellecteerd de volgende button in een variabele

const sausKiezen = document.getElementById("sausKiezen") // sellecteerd de saus kiezen UL in een variabele


volgendeKnop.addEventListener('click', function () {
    sausKiezen.classList.add('weg') // voegt een class toe aan de UL
    toppingsKiezen.classList.remove('weg') // verwijderd een class van de UL
})




const vorigeKnop = document.getElementById("vorigeKnop") // sellecteerd de vorige button in een variabele

const toppingsKiezen = document.getElementById("toppingsKiezen") // sellecteerd de toppings kiezen UL in een variabele


vorigeKnop.addEventListener('click', function () {
    toppingsKiezen.classList.add('weg') // voegt een class toe aan de UL
    sausKiezen.classList.remove('weg') // verwijderd een class van de UL
})














//toppings toevoegen

// Dit zou ik doen als alleen kaas er was.
// //kaas
// const kaasKnop = document.getElementById("kaasKnop")

// const kaas = document.getElementById("kaas")

// kaasKnop.addEventListener('click', function () {
//     kaas.classList.toggle('weg')
// })


// dit is bovenstaande (wat in de comment staat) code maar dan DRY gemaakt
const toppings = ['kaas', 'groenten', 'ananas', 'pepperoni']


toppings.forEach(topping => {
    const knop = document.getElementById(topping + "Knop")
    const element = document.getElementById(topping)

    knop.addEventListener('click', () => {
        element.classList.toggle('weg')
    })
})