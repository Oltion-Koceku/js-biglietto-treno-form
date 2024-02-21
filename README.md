Calcolo del prezzo del biglietto del treno
===

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
2. va applicato uno sconto del 20% per i minorenni
3. va applicato uno sconto del 40% per gli over 65.
- **MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console.
- **MILESTONE 2:**
Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Svolgimento
===
1. prompt chilometri che vuole percorrere
2. prompt Età paseggero
3. con una variabile calcoliamo il prezzo del biglietto in base ai chilometri
4. con una variabile calcoliamo lo sconto per i minorenni
5. con una variabile calcoliamo lo sconto per gli over 65
6. con l'IF capiamo quale sconto utilizzare
7. creiamo due input( per i km da percorrere, e per scegliere l'età) che verranno collegati alle proprie variabili
8. creiamo un bottone collegato alla variabile che genererà il prezzo totale
9. creiamo un form dentro al quale verranno stampati i risultati