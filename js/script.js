// elementi
const km = document.querySelector(".inputkm");
const eta = document.querySelector(".selezioneEta")
const nomeP = document.querySelector(".nomeP")
const display = document.querySelector(".d-none")
let prezzoConSconti;
let prezzoTotale;
let carrozzaP;
let codiceCP;

// elementi P
const nome = document.querySelector(".nome")
const offerta = document.querySelector(".offerta")
const carrozza = document.querySelector(".carrozza")
const codice = document.querySelector(".codice")
const costo = document.querySelector(".costo")

// button
const generator = document.querySelector(".generator")


// Calcoli


// click
generator.addEventListener("click", function(event){
  event.preventDefault();
  console.log(km.value);
  
  const prezzoBiglietto = km.value * 0.21;
  
  const prezzoMinorenne = (prezzoBiglietto * 20 )/100;
  const prezzoOver = (prezzoBiglietto * 40 )/100;
  
  console.log(prezzoMinorenne, prezzoBiglietto, prezzoOver, nome.value);

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

  // Biglietto

  // Random
  carrozzaP = Math.floor(Math.random() * 10) + 1;
  codiceCP = Math.floor(Math.random() * 100000) + 1000;
  console.log(carrozzaP, codiceCP);
  // display
  display.classList.toggle("d-none")
  console.log(display);
  // Informazioni
  nome.innerHTML = nomeP.value

  offerta.innerHTML = ("Biglietto Standard")

  carrozza.innerHTML = carrozzaP

  codice.innerHTML = codiceCP

  costo.innerHTML += prezzoTotale

console.log(nomeP.value);

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
