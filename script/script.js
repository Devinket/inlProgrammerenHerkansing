console.log("hoi")




//bron: lamp opdracht

/* hiermee kiezen we de saus */
let deeg = document.getElementById("pizzadeeg") // zet de html img element in een variabele



let tomatensaus = document.getElementById("tomatensaus") // Sellecteerd het flesje tomatensaus in een variabele

function tomatensausKnop(){
        deeg.src = "./img/pizzadeeg_tomatensaus.png" // veranderd de source van het deeg variabele
}

tomatensaus.addEventListener('click', tomatensausKnop) // zorgt dat de bovenstaande function uitgevoerd wordt als je op het tomatensausflesje klikt




//herhaling voor bbq flesje

let bbqsaus = document.getElementById("bbqsaus")

function bbqsausKnop(){
        deeg.src = "./img/pizzadeeg_bbqsaus.png"
}

bbqsaus.addEventListener('click', bbqsausKnop)


//herhaling voor geen saus

let geensaus = document.getElementById("geensaus")

function geensausKnop(){
        deeg.src = "./img/pizzadeeg.png"
}

geensaus.addEventListener('click', geensausKnop)


/* poging om het togglebaar te maken
let tomatensausStatus = false

function tomatensausKnop(){
    tomatensausStatus = !tomatensausStatus

    if (tomatensausStatus == true){
    deeg.src = "./img/pizzadeeg_tomatensaus.png"
    } else {
    deeg.src = "./img/pizzadeeg.png"
    }
}

tomatensaus.addEventListener('click', tomatensausKnop)




let bbqsausStatus = false

let bbqsaus = document.getElementById("bbqsaus")


function bbqsausKnop(){
    bbqsausStatus = !bbqsausStatus

    if (bbqsausStatus == true){
    deeg.src = "./img/pizzadeeg_bbqsaus.png"
    } else {
    deeg.src = "./img/pizzadeeg.png"
    }
}

bbqsaus.addEventListener('click', bbqsausKnop)

*/



















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


// //kaas
// const kaasKnop = document.getElementById("kaasKnop")

// const kaas = document.getElementById("kaas")

// kaasKnop.addEventListener('click', function () {
//     kaas.classList.toggle('weg')
// })


// //groenten
// const groentenKnop = document.getElementById("groentenKnop")

// const groenten = document.getElementById("groenten")

// groentenKnop.addEventListener('click', function () {
//     groenten.classList.toggle('weg')
// })


// //ananas
// const ananasKnop = document.getElementById("ananasKnop")

// const ananas = document.getElementById("ananas")

// ananasKnop.addEventListener('click', function () {
//     ananas.classList.toggle('weg')
// })


//pepperoni
//const pepperoniKnop = document.getElementById("pepperoniKnop")

//const pepperoni = document.getElementById("pepperoni")

//pepperoniKnop.addEventListener('click', function () {
    //pepperoni.classList.toggle('weg')
//})




// dit is bovenstaande (wat in de comment staat) code maar dan DRY gemaakt
const toppings = ['kaas', 'groenten', 'ananas', 'pepperoni']

toppings.forEach(topping => {
    const knop = document.getElementById(topping + "Knop")
    const element = document.getElementById(topping)

    knop.addEventListener('click', () => {
        element.classList.toggle('weg')
    })
})
