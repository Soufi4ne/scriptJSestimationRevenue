const fonctionArgent = async(event) => {
  
  let data = await import('./data.json', {
    assert: {
        type: 'json'
    }
  })

  // console
  console.log(data)
  data = data.default
  

  const type = document.querySelector("#selectionType")?.value;
  const region = document.querySelector("#selectionRegion")?.value;
  const place = document.querySelector("#selectionPlace")?.value;
  
  const estimation = document.querySelector("#estimation");
  
  if (type != "none" && region != "none" && place != "none") {
    
    console.log(type + " + " + region + " + " + place);

    const price = await data?.[type]?.[region]?.[place];

    estimation.innerHTML =
      "Jusqu'à " + `<span style='color: #ec5075;'> ${price}<span/>` + "€";
      
  } else {
    estimation.innerHTML = "Veuillez séléctionner toutes les valeurs";
  }
};