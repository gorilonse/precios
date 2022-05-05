// Responsables de los cuarteles
const listaMar2022 = [
  {
    Salvador: {
      TV: {
        Cable: 1900,
        HD: 500,
        "Adicional HD": 280,
        Futbol: 1120,
        HBO: 630,
        Adultos: 300,
      },
      Internet: {
        "Internet 50": [2600, 1820],
        "Internet 100": 3570,
        "Internet 10": 1900,
        "Internet 20": 2000,
        "Internet 30": 2760,
        "Internet 200": 7000,
        "Internet 300": 13600,
        "Internet 500": 15100,
      },
    },
  },
  {
    Palpala: {
      TV: {
        Cable: 1320,
        HD: 450,
        "Adicional HD": 230,
        Futbol: 1120,
        HBO: 630,
        Adultos: 300,
      },
      Internet: {
        Internet20: 1840,
        Internet50: 2040,
        Internet100: 3150,
      },
    },
  },
];

titulo = document.createElement("li");
titulo.innerText = "Testeo";
testeo.appendChild(titulo);

// listaMar2022.map((item) => {
//   titulo = document.createElement("li");
//   keys = Object.keys(item);
//   titulo.innerText = keys;
//   testeo.appendChild(titulo);
//   hijos = item[keys];

//   console.log(hijos);

// });

for (const key in listaMar2022) {
  if (Object.hasOwnProperty.call(listaMar2022, key)) {
    const element = listaMar2022[key];
    console.log("primer llamada",key);
    for (const key in element) {
      if (Object.hasOwnProperty.call(element, key)) {
        const elemen = element[key];
        console.log(key); //zona
        aux = document.createElement("h2");
        aux.textContent = key;
        testeo.appendChild(aux);
        for (const key in elemen) {
          if (Object.hasOwnProperty.call(elemen, key)) {
            const eleme = elemen[key];
            //console.log(key); //servicio
            aux = document.createElement("h3");
            aux.textContent = key;
            testeo.appendChild(aux);
            ul = document.createElement("ul");
            testeo.appendChild(ul);
            for (const key in eleme) {
              if (Object.hasOwnProperty.call(eleme, key)) {
                const element = eleme[key];
                //console.log(key, element); //detalle
                aux = document.createElement("li");
                
                if(element.length){
                  console.log(element.length);
                  aux.textContent = `${key} - 0% +`;
                }else{

                  aux.textContent = `${key} $${element}`;
                }
                ul.appendChild(aux);
              }
            }
          }
        }
      }
    }
  }
}
