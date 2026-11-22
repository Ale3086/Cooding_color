//Dichiarazione di variabili base per colore e contatore
let RGB = [0,0,0];
let colore = 0;

function elabora() 
{
    let codiceHex = document.getElementById("input").value;

    //controllo che sia valido input (max 1 byte e non nullo)
    if (codiceHex>=0&&codiceHex<=255&&codiceHex!="") {
        RGB[colore] = codiceHex;
        let testo = document.getElementById("inputText").value;

        //Inserimento risulatti in html con jquery
        $("#output1").html("Il numero inserito è il: " + codiceHex);
        $("#output2").css("color", `rgb(${RGB[0]},${RGB[1]},${RGB[2]})`);
        $("#output2").html(testo);
        colore++;

        //divisione per selezione per chiedere rispettivo colore e resettare al blu
        if (colore===1) {
            $("#coloreTxt").html("Inserisci un numero per il verde: ");
        } else if (colore===2) {
            $("#coloreTxt").html("Inserisci un numero per il blu: ");
        } else {
            $("#coloreTxt").html("Inserisci un numero per il rosso: ");
            colore = 0;
            RGB = [0,0,0];
        }
    } else {
        //stato di errore di input non validato
        $("#output1").html("Il numero inserito è il: " + codiceHex);
        $("#output2").css("color", "rgb(255,0,0)");
        $("#output2").html("Errore, il codice inserito non è valido!!!");
    }
}

function cancella() 
{
    //reset di tutti i valori modificabili nella pagina al loro valore originale
    RGB = [0,0,0];
    colore = 0;
    $("#coloreTxt").html("Inserisci un numero per il rosso: ");
    $("#output2").html("");
    $("#output1").html("");
    $("#input").val("");
    $("#inputText").val("");
}

function setData()
{
    //funzione che prende l'attuale data del proprio PC e la stampa quando chiamata in formato italiano
    const adesso = new Date();
    $("#date").html(`Oggi è il: ${adesso.toLocaleString("it-IT")}`);
}

//chiamata della data all'avvio di pagina
setData();
//chiamata ripetuta ogni 1000ms (1 secondo) per aggiornare il tempo
setInterval(setData, 1000);