/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */


/* Strumenti */
// for loop (e forEach)
// array
// innerHTML


// inizializzazione array e variabili costanti
const boxes = document.querySelectorAll('.box');
const playButton = document.getElementById('play');
const mailArray = ['pippo']
const userMail = prompt('Inserisci la tua email');


for(let i = 0; i < mailArray.length; i++){
    if(userMail === mailArray[i]){
        console.log(boxes);
        // display del gioco
        boxes.forEach(box => {
            if(!box.classList.contains("error")){
                box.classList.remove("d-none");
            } 
        });
    } else {
        // account non verificato riprova
        boxes.forEach(box => {
            if (!(box.classList.contains("verified") || box.classList.contains("game"))){
                box.classList.remove("d-none");
            }
        });
    }

}