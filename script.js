// let region = document.querySelectorAll('selectionRegion');
// let type = document.querySelectorAll('selectionType');
// let place = document.querySelectorAll('selectionPlace');
// // ------------------------------------------------
// let idf = document.querySelectorAll('IleDeFrance');
// let bzh = document.querySelectorAll('Bretagne')
// let normandie = document.querySelectorAll("Normandie")
// let corse = document.querySelectorAll("Corse")
//     // alert(bzh)
// console.log(bzh)
//     // -------------------------------------



// let fonctionRegion = region.onchange() = function(valeurRegion) {
//     valeurRegion = 0;
//     if (value = 'IleDeFrance') {
//         valeurRegion = 300
//     } else if (value = 'corse') {
//         valeurRegion = 250
//     } else {
//         valeurRegion = 200
//     }
//     console.log(valeurRegion)
// }

// let fonctionType = type.onchange() = function(valeurType) {
//     valeurType = 0
//     if (value = "Domicile") {
//         valeurType = 150
//     } else {
//         valeurType = 300
//     }
//     console.log(valeurType)
// }

// let fonctionPlace = place.onchange() = function(valeurPlace) {
//     valeurPlace = 0;
//     if (value = '1a2') {
//         valeurPlace = 50
//     } else if (value = '2a4') {
//         valeurPlace = 100
//     } else {
//         valeurPlace = 150
//     }
//     console.log(valeurRegion)
// }

//----------------

var globalvalue = 0;
var valeurPlace = 0;
var valeurRegion = 0;
var valeurType = 0;
var value = null;
var type = null;

function fonctionArgent(event) {
    console.log("hello");
    value = event.value;
    type = event.id;
    console.log(event.id);

    if (type == 'selectionRegion') {
        console.log("modif région");
        if (value == 'IleDeFrance') {
            valeurRegion = 300
        } else if (value == 'Corse') {
            valeurRegion = 250
        } else {
            valeurRegion = 200
        }
    } else if (type == "selectionType") {
        console.log("modif type");
        if (value == "Domicile") {
            valeurType = 150
        } else {
            valeurType = 300
        }
    } else if (type == 'selectionPlace') {
        console.log("modif place");
        if (value == '1a2') {
            valeurPlace = 50
        } else if (value == '2a4') {
            valeurPlace = 100
        } else {
            valeurPlace = 150
        }
    }
    console.log(valeurPlace + " + " + valeurType + " + " + valeurRegion);
    globalvalue = valeurPlace + valeurType + valeurRegion;
    console.log(globalvalue);
    document.querySelector("#estimation").innerHTML = "Vous allez gagner " + globalvalue + "€.";

}