
const lonInput = document.getElementById("lon") as HTMLInputElement;
const rentaInput = document.getElementById("renta") as HTMLInputElement;
const timeInput = document.getElementById("time") as HTMLInputElement;


const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

function calculateM(P: number, r: number, n: number): number {
  return (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
}



submitBtn.addEventListener("click", () => {

    let lon: number = Number(lonInput.value);
    const renta: number = Number(rentaInput.value) / 100 / 12;
    const time: number = Number(timeInput.value) * 12;
    console.log(time);

  

  const errorMessage = document.createElement("p");
  const errorMessage2 = document.createElement("p");

  if (time / 12 > 50) {
    errorMessage.innerHTML = `Återbetalningstiden är för lång!`;
    document.body.appendChild(errorMessage);
  } 

  
  if (renta * 100 * 12 > 30) {
    errorMessage2.innerHTML = `Räntan du har angett är för hög!`;
    document.body.appendChild(errorMessage2);
  } 

  const monadskostnad: number = Number(
    calculateM(lon, renta, time).toFixed(2)
  );

  
  const totalRenta: number = lon * renta * time;

  
  if (!(renta * 100 * 12 > 40) && !(time / 12 > 50)) {
    const results = document.createElement("p");
    results.innerHTML = `Din totala månadskostnad blir ${monadskostnad} kronor.
    Din totala räntekostnad över hela låneperioden blir ${totalRenta} kronor.`;
    document.body.appendChild(results);
  }

  
  if (!(renta * 100 * 12 > 30) && !(time / 12 > 50)) {

    for (let month = 1; month <= time; month++) {
      const renteBetalning: number = lon * renta;
      const avbetalning: number = monadskostnad - renteBetalning;
      lon -= avbetalning;
      if (lon <= 0) {
    
      }
      const results2 = document.createElement("p");lon
      results2.innerHTML = `Månad ${month}:&nbsp;${lon.toFixed(
        2
      )}`;

      document.body.appendChild(results2);
    }
  }
});


function removesResults() {
  const befintligaResultat = document.querySelectorAll("p");
  
  befintligaResultat.forEach(result => {
    result.remove();
  });
}