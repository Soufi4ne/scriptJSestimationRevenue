let region = document.querySelectorAll('selectionRegion');
let type = document.querySelectorAll('selectionType');
let selectionPlace = document.querySelectorAll('selectionPlace');
// ------------------------------------------------
let idf = document.querySelectorAll('IleDeFrance');
let bzh = document.querySelectorAll('Bretagne')
let normandie = document.querySelectorAll("Normandie")
let corse = document.querySelectorAll("Corse")
// alert(bzh)
console.log(bzh)
// -------------------------------------

region.onchange() = function(valeurRegion) {
    valeurRegion=0;
    if (value=='IleDeFrance') {
        valeurRegion == 300
    }
    else if (value == 'corse') {
        valeurRegion == 250
    } 
    else {
        valeurRegion == 200
    }
}

