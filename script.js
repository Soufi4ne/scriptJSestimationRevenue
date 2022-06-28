// import data from ".data.json"
// console.log(data)

import data from './data.json' 
// const price = data[type][region][place]

let globalvalue = 0;
let valeurPlace = 0;
let valeurRegion = 0;
let valeurType = 0;
let value = null;
let type = null;
let estimation = document.querySelector("#estimation");
// let IDF = document.querySelector(".IDF")
const selectionRegion = document.querySelector("#selectionRegion");
const selectionPlace = document.querySelector("#selectionPlace")
const selectionType = document.querySelector("#selectionType")



function fonctionArgent(event) {
  console.log("hello");
  value = event.value;
  type = event.id;
  console.log(event.id);

  if (type === "selectionRegion") {
    switch (value) {
      case "IleDeFrance":
        valeurRegion = 275;
        break;
      case "Corse":
        valeurRegion = 250;
        break;
      case "Bretagne":
        valeurRegion = 200;
        break;
      case "Normandie":
        valeurRegion = 150;
        break;
      case "Auvergne-Rhone-Alpes":
        valeurRegion = 150;
        break;
      case "Bourgogne-Franche-Comté":
        valeurRegion = 150;
        break;
      case "Centre-Val De Loire":
        valeurRegion = 150;
        break;
      case "Grand Est":
        valeurRegion = 150;
        break;
      case "Haut de France":
        valeurRegion = 150;
        break;
      case "Nouvelle Aquitaine":
        valeurRegion = 150;
        break;
      case "Occitanie":
        valeurRegion = 150;
        break;
      case "Pays de la Loire":
        valeurRegion = 150;
        break;
      case "Provence-Alpes-Côte Azure":
        valeurRegion = 150;
        break;

      default:
        valeurRegion = 0;
    }
  }
  // A rendre propre plus tard inchaaAllah

  if (type === "selectionType") {
    switch (value) {
      case "Domicile":
        valeurType = 100;
        break;
      case "Logement":
        valeurType = 200;
        break;
      default:
        valeurType = 0;
    }
  }

  if (type === "selectionPlace") {
    switch (value) {
      case "1a2":
        valeurPlace = 100;
        break;
      case "2a4":
        valeurPlace = 200;
        break;
      case "4Plus":
        valeurPlace = 300;
        break;
      default:
        valeurPlace = 0;
    }
  }

  console.log(valeurPlace + " + " + valeurType + " + " + valeurRegion);
  globalvalue = valeurPlace + valeurType + valeurRegion;
  console.log(globalvalue);



  if (valeurPlace != "" && valeurRegion != "" && valeurType != "") {
    document.querySelector("#estimation").innerHTML =
      "Jusqu'à " + `<span style='color: #ec5075;'> ${globalvalue}<span/>` + "€";
  } 
  else if (selectionRegion == "IleDeFrance") {
  }
  else {
    document.querySelector("#estimation").innerHTML =
      "Veuillez séléctionner toutes les valeurs";
  }
 
 


 
  // if (selectionRegion == "IleDeFrance" && selectionType == "Logement" && selectionPlace == "1&2") {
  //   valeurRegion = valeurRegion + 3000;
  //   document.querySelector("#estimation").innerHTML =
  //     "Jusqu'à " + `<span style='color: #ec5075;'> ${globalvalue}<span/>` + "€";
  // }
}
