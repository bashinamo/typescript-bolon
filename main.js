// ha koppling till ingångarna för lon, ränta och tid
const loanInput = document.getElementById("lon");
const interestInput = document.getElementById("renta");
const timeInput = document.getElementById("time");


// anslutning för att knappen
const submitBtn = document.getElementById("submit-btn");

// funktionen matematik till kalkylator
function calculateM(P, r, n) {
    return (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
}

// Lägger till händelse för knappen
submitBtn.addEventListener("click", () => {

});

// värden måste konverteras från string till heltal/tal
let lon = Number(loanInput.value)

const renta = Number(interestInput.value) / 100 / 12;

const time = Number(timeInput.value) * 12;


// Kontrollera om tiden är längre än 50 /= år
if (time / 12 > 50) {
    errorMessage.innerHTML = `Återbetalningstiden är för long!`;
    document.body.appendChild(errorMessage);
}
// Kontrollera om räntan är över 30 %
if (renta * 100 * 12 > 30) {
    errorMessage2.innerHTML = `Räntan du har angett är för hög!`;
    document.body.appendChild(errorMessage2);
}
 // Beräkna månadskostnaden
 const monadskostnad = Number(calculateM(lon, renta, time).toFixed(2));

 // Beräkna den totala ränteavgiften
 const totalRenta = lon * renta * time;
    // Presentera resultat för kuunden om den gick igenom
    if (!(renta * 100 * 12 > 30) && !(time / 12 > 50)) {
        const results = document.createElement("p");
        results.innerHTML = `
            Din totala månadskostnad blir ${monadskostnad} kronor.<br>
            Din totala räntekostnad över hela loneperioden blir ${totalRenta} kronor.`;
        document.body.appendChild(results);
    }
    // En betalningsplan
    if (!(renta * 100 * 12 > 30) && !(time / 12 > 50)) {
        for (let month = 1; month <= time; month++) {
            const renteBetalning = lon * renta;
            const avbetalning = monadskostnad - renteBetalning;
            lon -= avbetalning;
            if (lon <= 0) {
                break;
            }
            const results2 = document.createElement("p");
            results2.innerHTML = `Månad ${month}:&nbsp;${lon.toFixed(2)}`;
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