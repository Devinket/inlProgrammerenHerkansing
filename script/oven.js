// ervoor zorgen dat de "zet in de oven" werkt
const OvenKnop = document.getElementById("Oven")
const OvenLi = document.getElementById("OvenLi")


console.log(OvenKnop)
console.log(OvenLi)


OvenKnop.addEventListener('click', function () {
    toppingsKiezen.classList.add('weg') // voegt een class toe aan de UL
    OvenLi.classList.remove('weg') // verwijderd een class van de UL
})







// Tijdmeter balk verhoogt elke 2 seconden
const meterOven = document.getElementById("tijdmeter")
const meterWaarde = document.getElementById("meterWaarde")

console.log(meterOven)


function veranderMeters() {
  console.log("meter verhogen")
  // zorg dat de meters elke 2 seconden met 1 verhoogt

  meterOven.value++
  meterWaarde.textContent = meterOven.value

  //roept functie aan die status van pizza laat zien
  updateStatus(meterOven.value)
}
// roep de veranderMeters functie elke 2 seconden aan
let intervalId = null // Eigenlijk niet nodig want we kunnen niet meer dan 1x op de knop klikken, maar dit zou ervoor zorgen dat als je 2x op de knop klikt dat hij dan niet nog een keer de interval toevoegt.

OvenKnop.addEventListener("click", function () {
     if (intervalId === null) {
        intervalId = setInterval(veranderMeters, 2000) 
        } 
    })
// setInterval(veranderMeters, 2000);



// Status van je pizza
const meterStatus = document.getElementById("meterStatus");

function updateStatus(value) {
    if (value <= 2) {
        meterStatus.textContent = "Wordt bereid"
    } else if (value <= 7) {
        meterStatus.textContent = "In de oven";
    } else if (value <= 9) {
        meterStatus.textContent = "Bijna klaar";
    } else {
        meterStatus.textContent = "Je pizza is klaar!";
    }

    // trigger confetti als het 10 is
    if (value === 10) {
        startConfetti();
    }
    // omdat al een interval aanwezig is op de andere functie die deze functie aanroept komt er om de 2 seconde comfetti
}

// confetti
function startConfetti() {
    // simpele confetti explosie
    confetti({
        particleCount: 140,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#ff0', '#f00', '#0f0', '#00f'],
        gravity: 1,
    });
}


// bron voor confetti: ChatGPT
// https://chatgpt.com/share/695bccbd-459c-8005-a5f0-10f55425693b






// Skip wachten knop
const skipButton = document.getElementById("skip")
console.log(skip)

skipButton.addEventListener("click", function() {
  meterOven.value = 10

  updateStatus(meterOven.value);
  meterWaarde.textContent = meterOven.value;
})










// reset knop

const resetButton = document.getElementById("reset")

resetButton.addEventListener("click", function() {
    window.location.reload(); //reload de pagina
}  )