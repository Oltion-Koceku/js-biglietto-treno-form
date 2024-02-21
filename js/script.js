// Prompt da chiedere all'utente

const kM = prompt("Quanti chilometri vuoi percorrere?");

const eta = prompt("Quanti anni hai?")
console.log(kM, eta);

let prezzoConSconti;
// Calcoli

const prezzoBiglietto = kM * 0.21;

const prezzoMinorenne = (prezzoBiglietto * 20 )/100;
const prezzoOver = (prezzoBiglietto * 40 )/100;

if(eta < 18){
  prezzoConSconti = prezzoBiglietto - prezzoMinorenne;
}else if(eta > 65){
  prezzoConSconti = prezzoBiglietto - prezzoOver;
}else{
  prezzoConSconti = prezzoBiglietto
}

// Prezzo da pagare

let prezzoTotale = prezzoConSconti.toFixed(2);

document.getElementById("output").innerHTML += prezzoTotale
console.log(prezzoBiglietto, prezzoMinorenne, prezzoOver);
console.log(prezzoConSconti, prezzoTotale);
