// elementi
const km = document.querySelector(".inputkm");
const eta = document.querySelector(".selezioneEta")
let prezzoConSconti;
let prezzoTotale;

// button
const generator = document.querySelector(".generator")


// Calcoli

const prezzoBiglietto = km.value * 0.21;

const prezzoMinorenne = (prezzoBiglietto * 20 )/100;
const prezzoOver = (prezzoBiglietto * 40 )/100;

console.log(prezzoMinorenne, prezzoBiglietto, prezzoOver);

// click
generator.addEventListener("click", function(event){
  event.preventDefault();
  console.log(km.value);
  if(eta.value == "minorenne"){
    prezzoConSconti = prezzoBiglietto - prezzoMinorenne;
  }else if(eta.value == "over"){
    prezzoConSconti = prezzoBiglietto - prezzoOver;
  }else{
    prezzoConSconti = prezzoBiglietto
  }
  
  // Prezzo da pagare
  prezzoTotale = prezzoConSconti.toFixed(2);
  console.log(prezzoConSconti, prezzoTotale);
})

generator.addEventListener("click", sceltaEta)

// function

function sceltaEta(){
  console.log(eta.value);

}







// let prezzoConSconti;
// // Calcoli

// const prezzoBiglietto = kM * 0.21;

// const prezzoMinorenne = (prezzoBiglietto * 20 )/100;
// const prezzoOver = (prezzoBiglietto * 40 )/100;

// if(eta < 18){
//   prezzoConSconti = prezzoBiglietto - prezzoMinorenne;
// }else if(eta > 65){
//   prezzoConSconti = prezzoBiglietto - prezzoOver;
// }else{
//   prezzoConSconti = prezzoBiglietto
// }

// // Prezzo da pagare

// let prezzoTotale = prezzoConSconti.toFixed(2);

// document.getElementById("output").innerHTML += prezzoTotale
// console.log(prezzoBiglietto, prezzoMinorenne, prezzoOver);
// console.log(prezzoConSconti, prezzoTotale);
