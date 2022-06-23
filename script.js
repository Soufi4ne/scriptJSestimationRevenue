let region = document.querySelectorAll('selectionRegion');
let type = document.querySelectorAll('selectionType');
let place = document.querySelectorAll('selectionPlace');
// ------------------------------------------------
let idf = document.querySelectorAll('IleDeFrance');
let bzh = document.querySelectorAll('Bretagne')
let normandie = document.querySelectorAll("Normandie")
let corse = document.querySelectorAll("Corse")
// alert(bzh)
console.log(bzh)
// -------------------------------------



let fonctionRegion = function() {
    var valeurRegion=0;
    if (document.getElementById('selectid').value =='IleDeFrance') {
        valeurRegion == 300
    }
    else if (document.getElementById('selectid').value == 'corse') {
        valeurRegion == 250
    } 
    else {
        valeurRegion == 200
    }
    console.log(valeurRegion)
}

let fonctionType  = function () {
   var valeurType = 0
    if (document.getElementById('selectionType').value=="Domicile") {
        valeurType == 150
    } else {
        valeurType == 300
    }
    console.log(valeurType)
}

let fonctionPlace = function() {
   var valeurPlace=0;
    if (document.getElementById('selectid').value=='1a2') {
        valeurPlace== 50
    }
    else if (document.getElementById('selectid').value == '2a4') {
        valeurPlace == 100  
    } 
    else {
        valeurPlace == 150
    }
    console.log(valeurPlace)
}

//----------------


document.getElementById('estimation').innerHTML = ' Prix Final : ' 
+ " " + valeurPlace + valeurRegion + valeurType; 
