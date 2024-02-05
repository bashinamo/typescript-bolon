// ha koppling till ingångarna för lån, ränta och tid
const loanInput = document.getElementById("lån");
const interestInput = document.getElementById("ränta");
const timeInput = document.getElementById("time");


// anslutning för att knappen
const submitBtn = document.getElementById("submit-btn");

// funktionen matematik till kalkylator
function calculateM(P, r, n) {
    return (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
}

// Lägger till händelse för knappen
submitBtn.addEventListener("click", () => {});

// värden måste konverteras från string till heltal/tal
let lån = Number.lånInput.value
console.log(lån);

const ränta = Number.räntaInput.value / 100 / 12;
console.log(ränta);

const time = Number.timeInput.value * 12;
console.log(time);

// Radera tidigare resultat/felmeddelanden
deleteResults();
    const errorMessage = document.createElement("p");
    const errorMessage2 = document.createElement("p");

// Kontrollera om tiden är längre än 50 /= år
if (time / 12 > 50) {
    errorMessage.innerHTML = `Återbetalningstiden är för lång!`;
    document.body.appendChild(errorMessage);
}
// Kontrollera om räntan är över 30 %
if (ränta * 100 * 12 > 30) {
    errorMessage2.innerHTML = `Räntan du har angett är för hög!`;
    document.body.appendChild(errorMessage2);
}
 // Beräkna månadskostnaden
 const månadskostnad = Number(calculateM(lån, ränta, time).toFixed(2));

 // Beräkna den totala ränteavgiften
 const totalRänta = lån * ränta * time;
    // Presentera resultat för kuunden om den gick igenom
    if (!(ränta * 100 * 12 > 30) && !(time / 12 > 50)) {
        const results = document.createElement("p");
        results.innerHTML = `
            Din totala månadskostnad blir ${månadskostnad} kronor.<br>
            Din totala räntekostnad över hela låneperioden blir ${totalRänta} kronor.`;
        document.body.appendChild(results);
    }
    // En betalningsplan
    if (!(ränta * 100 * 12 > 30) && !(time / 12 > 50)) {
        for (let month = 1; month <= time; month++) {
            const ränteBetalning = lån * ränta;
            const avbetalning = månadskostnad - ränteBetalning;
            lån -= avbetalning;
            if (lån <= 0) {
                break;
            }
            const results2 = document.createElement("p");
            results2.innerHTML = `Månad ${month}:&nbsp;${lån.toFixed(2)}`;
            document.body.appendChild(results2);
        }
    }

    // Funktion för att ta bort tidigare resultat
    function removesResults() {
        const befintligaResultat = document.querySelectorAll("p");
        befintligaResultat.forEach(result => {
            result.remove();
        });
    }