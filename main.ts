
const lånInput = document.getElementById("loan") as HTMLInputElement;
const räntaInput = document.getElementById("interest") as HTMLInputElement;
const timeInput = document.getElementById("time") as HTMLInputElement;


const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

function calculateM(P: number, r: number, n: number): number {
  return (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
}


submitBtn.addEventListener("click", () => {

    let lån: number = Number.lånInput.value;
    console.log(lån);
    const ränta: number = Number.räntaInput.value / 100 / 12;
    console.log(ränta);
    const time: number = Number.timeInput.value * 12;
    console.log(time);

  deleteResults();

  const errorMessage = document.createElement("p");
  const errorMessage2 = document.createElement("p");

  if (time / 12 > 50) {
    errorMessage.innerHTML = `Återbetalningstiden är för lång!`;
    document.body.appendChild(errorMessage);
  } 

  
  if (ränta * 100 * 12 > 30) {
    errorMessage2.innerHTML = `Räntan du har angett är för hög!`;
    document.body.appendChild(errorMessage2);
  } 

  const månadskostnad: number = Number(
    calculateM(lån, ränta, time).toFixed(2)
  );

  
  const totalRänta: number = lån * ränta * time;

  
  if (!(ränta * 100 * 12 > 40) && !(time / 12 > 50)) {
    const results = document.createElement("p");
    results.innerHTML = `Din totala månadskostnad blir ${månadskostnad} kronor.
    Din totala räntekostnad över hela låneperioden blir ${totalRänta} kronor.`;
    document.body.appendChild(results);
  }

  
  if (!(ränta * 100 * 12 > 30) && !(time / 12 > 50)) {

    for (let month = 1; month <= time; month++) {
      const ränteBetalning: number = lån * ränta;
      const avbetalning: number = månadskostnad - ränteBetalning;
      lån -= avbetalning;
      if (lån <= 0) {
    
      }
      const results2 = document.createElement("p");lån
      results2.innerHTML = `Månad ${month}:&nbsp;${lån.toFixed(
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