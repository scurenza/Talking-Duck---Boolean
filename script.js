// Raccolgo dalla pagina gli elementi che mi servono
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigure = document.querySelector('figure');

// osserviamo il tasto play per vedere se qualcuno lo clicca
playButton.addEventListener('click', function(){
    //istruzioni in caso di click
    const textLenght = textArea.value.trim().length;

    if(textLenght > 0){
        //allora fa parlare la paperella
         talk();
    }


});

//Preparo una funzione per far parlare la paperella
function talk(){
    //1 - Recuperiamo tono e testo
    const text = textArea.value;
    const pitch = pitchBar.value;

    //2- Preparo una frase per il sintetizzatore
    const utterance = new SpeechSynthesisUtterance(text);

    //3- specifichiamo altri dettagli della frase
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = pitch;

    // Facciamo parlare la paperella
    speechSynthesis.speak(utterance);

    //Quando la paperella inizia a parlare
    utterance.addEventListener('start', function() {

        //Blocco dei controlli
        textArea.disabled = true;
        pitchBar.disabled = true;
        playButton.disabled = true;

        //animazione paperella
        duckFigure.classList.add('talking');
    });

    //Quando la paperella finisce di parlare
    utterance.addEventListener('end', function(){

         //Sblocco dei controlli
         textArea.disabled = false;
         pitchBar.disabled = false;
         playButton.disabled = false;

        //Riportiamo la paperella statica
        duckFigure.classList.remove('talking');
    });

}
