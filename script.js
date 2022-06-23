var globalvalue = 0;
var valeurPlace = 0;
var valeurRegion = 0;
var valeurType = 0;
var value = null;
var type = null;
let estimation = document.querySelector("#estimation");

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
      default:
        valeurRegion = 0;
    }
  }

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

  if(valeurPlace != "" && valeurRegion != "" || valeurType != "") {
    document.querySelector("#estimation").innerHTML =
      "Jusqu'à " + `<span style='color: #ec5075;'> ${globalvalue}<span/>` + "€";
  } else {
    document.querySelector("#estimation").innerHTML ="Veuillez séléctionner toutes les valeurs"
  }
}

// if (globalvalue >= 350) {
//     estimation.style.display = 'none'
// }

// si globalvalue === 0 alors cacher #estimation
