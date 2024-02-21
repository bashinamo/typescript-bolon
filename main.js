// ha koppling till ingångarna för lon, ränta och tid
let lon;
let renta;
let time;


// anslutning för att knappen
const submitBtn = document.getElementById("submit-btn");
let res = "";

// funktionen matematik till kalkylator
function calculateM(P, r, n) {
    let mr = (r/100)/12;
    let t = mr*Math.pow((1+mr),n);
    let nm = Math.pow((1+mr), n)-1;
    return P *(t/nm);
}

// Lägger till händelse för knappen
submitBtn.addEventListener("click",function (){
    lon = document.getElementById("lon").value;
    renta = document.getElementById("renta").value;
    time = document.getElementById("time").value;

    res = calculateM(lon, renta, time);
    let totalRenta = lon * renta * time;
    document.getElementById("resultat").innerHTML = `
    Din totala månadskostnad blir ${res} kronor.<br>
    Din totala räntekostnad över hela låneperioden blir ${totalRenta} kronor.`;    
 
});



// Kontrollera om tiden är längre än 50 /= år
if (time / 12 > 40) {
    errorMessage.innerHTML = `Återbetalningstiden är för long!`;
    document.body.appendChild(errorMessage);
}
// Kontrollera om räntan är över 30 %
if (renta * 100 * 12 > 40) {
    errorMessage2.innerHTML = `Räntan du har angett är för hög!`;
    document.body.appendChild(errorMessage2);
}
 // Beräkna månadskostnaden
 let monadskostnad = res;
 console.log(res);

 // Beräkna den totala ränteavgiften
 let totalRenta = lon * renta * time;
   
    if (!(renta * 100 * 12 > 40) && !(time / 12 > 40)) {
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