var botonUno = document.querySelector("#en");
var botonCopiar = document.querySelector("#copytext");
var botonDos = document.querySelector("#des");


function encriptar (){
    var correction = {
       "a": "ai",
       "e": "enter",
       "i": "imes",
       "o": "ober",
       "u": "ufat"
   };
                           
   let text = document.getElementById("input").value; 
   let result = text.replace (/a|e|i|o|u/gi, matched => correction[matched]);                                              
    document.getElementById("output").innerHTML = result;                                           
}

botonUno.onclick = encriptar;


function desencriptar (){
    var correction = {
       "ai": "a",
       "enter": "e",
       "imes": "i",
       "ober": "o",
       "ufat": "u"
   };
                           
   let text = document.getElementById("output").value; 
   let result = text.replace (/ai|enter|imes|ober|ufat/gi, matched => correction[matched]);                                              
    document.getElementById("input").innerHTML = result;                                           
}
 
botonDos.onclick = desencriptar;

function copiar (){
   var copyText = document.getElementById("output");
   copyText.select();
   copyText.setSelectionRange(0, 99999); // For mobile devices                                           
   navigator.clipboard.writeText(copyText.value);             
   //alert("Copied the text: " + copyText.value);                              }
}

botonCopiar.onclick = copiar;