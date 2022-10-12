/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */


/* Strumenti */
// for loop (e forEach)
// array
// innerHTML
// Math.floor(), Math.random()


// inizializzazione array e variabili costanti
const boxes = document.querySelectorAll('.box');
const playButton = document.getElementById('play');
const mail = document.getElementById('mail');
// punteggi
const userScore = document.getElementById('userScore');
const cpuScore = document.getElementById('cpuScore');
const mailArray = ['pippo@example.com', 'pippo.pluto@gmail.com', 'pluto.pippo@hotmail.com', 'ciofanidaniel@libero.it']
const userMail = prompt('Inserisci la tua email');

let canAccess;
for(let i = 0; i < mailArray.length; i++){
    if(userMail == mailArray[i]){
        mail.innerHTML = mailArray[i]
        canAccess = true;
    } 
}

//console.log(canAccess);

if(canAccess) {
    // display del gioco
    boxes.forEach(box => {
        if(!(box.classList.contains("error"))){
            box.classList.remove("d-none");
        } else {
            box.classList.add("d-none")
        } 
        
    });
} else {
    // account non valido riprova
    boxes.forEach(box => {
        if(!(box.classList.contains("error"))){
            box.classList.add("d-none");
        } else {
            box.classList.remove("d-none")
        } 
        
    });
}

playButton.addEventListener('click', ()=>{
    let currentUserScore = Math.floor(Math.random()*12) +1;
    let currentCpuScore = Math.floor(Math.random()*12) +1;
    if(currentUserScore > currentCpuScore) {
        alert('Hai vinto!');
    } else if(currentUserScore == currentCpuScore) {
        alert('Pareggio!');
    } else {
        alert('Hai perso!');
    }
    userScore.innerHTML = currentUserScore;
    cpuScore.innerHTML = currentCpuScore;
    


});