let RGB = [0,0,0];
let colore = 0;

function elabora() 
{
    let codiceHex = document.getElementById("input").value;
    if (codiceHex>=0&&codiceHex<=255&&codiceHex!="") {
        RGB[colore] = codiceHex;
        let testo = document.getElementById("inputText").value;
        $("#output1").html("Il numero inserito è il: " + codiceHex);
        $("#output2").css("color", `rgb(${RGB[0]},${RGB[1]},${RGB[2]})`);
        $("#output2").html(testo);
        colore++;
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
        $("#output1").html("Il numero inserito è il: " + codiceHex);
        $("#output2").css("color", "rgb(255,0,0)");
        $("#output2").html("Errore, il codice inserito non è valido!!!");
    }
}

function cancella() 
{
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
    const adesso = new Date();
    $("#date").html(`Oggi è il: ${adesso.toLocaleString("it-IT")}`);
}

setData();
setInterval(setData, 1000);