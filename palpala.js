const listaMar2022 = {
  listaSalvador: {
    Cable: [
      {
        titulo: "TV",
        precio: [1900, 1520, 1330, 1140],
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      {
        titulo: "Go",
        precio: [500, 400, 350, 300],
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      {
        titulo: "Go Adicional",
        precio: 280,
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      { titulo: "Futbol", precio: 1120 },
      { titulo: "HBO", precio: 630 },
      { titulo: "Adultos", precio: 300 },
    ],
    Internet: [
      {
        titulo: "Internet 50MB",
        precio: [2600, 2080, 1820, 1540],
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      {
        titulo: "Internet 100MB",
        precio: [3570, 2856, 2499, 2099],
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      {
        titulo: "Internet 10MB",
        precio: 1900,
      },
      {
        titulo: "Internet 20MB",
        precio: 2000,
      },
      {
        titulo: "Internet 30MB",
        precio: 2760,
      },
      { titulo: "Internet 200MB", precio: 7000 },
    ],
  },
  listaPalpala: {
    Cable: [
      {
        titulo: "TV",
        precio: [1320, 800, 924, 1056],
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      {
        titulo: "Go",
        precio: [450, 360, 315, 270],
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      {
        titulo: "Go Adicional",
        precio: 230,
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      { titulo: "Futbol", precio: 1120 },
      { titulo: "HBO", precio: 630 },
      { titulo: "Adultos", precio: 300 },
    ],
    Internet: [
      {
        titulo: "Internet 20MB",
        precio: [1840, 1472, 1288],
        porcentajes: ["0%", "20%", "30%"],
      },
      {
        titulo: "Internet 50MB",
        precio: [2040, 1220, 1428, 1632],
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
      {
        titulo: "Internet 100MB",
        precio: [3150, 1880, 2205, 2520],
        porcentajes: ["0%", "20%", "30%", "40%"],
      },
    ],
  },
};
let carritoMap = new Map();
let localidad = document.querySelector("#localidad");

/************************************************************************
_____________________Cambio y dibujo___________________________________
*************************************************************************/

// ######################Borrar valores de la tabla###################################

localidad.addEventListener("change", (e) => {
  actualizarItems(e.target.selectedOptions[0].value);
  //limpar mapa carrito
  carritoMap.clear();
  //limpiar tabla
  let tbl = document.querySelector("table");
  tbl.removeChild(tbl.getElementsByTagName("tbody")[0]);
  tbl.createTBody();
});

let actualizarItems = (lista) => {
  const listaLocalidad = Object.entries(listaMar2022[lista]);

  listaLocalidad.map((tipoPrecios) => {
    let tipo = tipoPrecios[0];
    let templateRecuadro = document.getElementById("template-recuadro").content;
    let templateStepper = document.getElementById("template-stepper").content;
    let template;
    const fragment = document.createDocumentFragment();
    let container;

    if (tipo === "Cable") {
      container = document.querySelector(".wrapper-cable");
    } else {
      container = document.querySelector(".wrapper-internet");
    }
    elementos = tipoPrecios[1];
    elementos.map((item) => {
      if (Array.isArray(item.precio)) {
        template = templateStepper;
        template.getElementById("porcentaje").textContent = "0%";
        template
          .querySelector(".stepper")
          .setAttribute("porcentajes", item.porcentajes);
        template.querySelector(".stepper").setAttribute("indice", 0);

        if (container.classList.contains("wrapper-internet")) {
          itemStart = template.querySelector(".item");
          itemStart.classList.add("start");
        } else {
          itemStart = template.querySelector(".item");
          itemStart.classList.remove("start");
        }
      } else {
        template = templateRecuadro;
      }
      template.getElementById("nombre").textContent = item.titulo;
      template.querySelector(".item").setAttribute("value", item.precio);
      template.querySelector(".item").setAttribute("id", item.titulo);

      const clone = template.cloneNode(true);
      fragment.appendChild(clone);
    });
    container.innerHTML = "";
    container.appendChild(fragment);
  });
};

/************************************************************************
___________________________Event Listener_____________________________
*************************************************************************/

document.addEventListener("click", (e) => {
  //############### Stepper###############
  if (e.target.textContent === "add") {
    agrega = true;
    cambiarPorcentaje(agrega, e);
  }
  if (e.target.textContent === "remove") {
    agrega = false;
    cambiarPorcentaje(agrega, e);
  }

  //recuadro

  if (e.target.classList.contains("item")) {
    elm = e.target.parentNode;
    activated(elm, true);
  }
  if (e.target.parentNode.classList.contains("item")) {
    elm = e.target.parentNode.parentNode;
    activated(elm, true);
  }
}); //final del add event listener
/************************************************************************
___________________________Funcionalidad_____________________________
*************************************************************************/
//funcion para cambiar porcentajes
let cambiarPorcentaje = (agrega, e) => {
  //definir recuadro para activar
  let recuadroActual = e.target.parentNode.parentNode;

  let stepperActual = e.target.parentNode;
  let porcentajesArray = stepperActual.getAttribute("porcentajes").split(",");
  let indice = parseInt(stepperActual.getAttribute("indice"));

  if (agrega) {
    indice < porcentajesArray.length - 1 ? indice++ : (indice = 0);
  } else {
    indice > 0 ? indice-- : (indice = porcentajesArray.length - 1);
  }
  stepperActual.setAttribute("indice", indice);
  porcentajesData = stepperActual.querySelector("#porcentaje");
  porcentajesData.textContent = porcentajesArray[indice];

  //cambiar funcionalidad segun elementos hermanos activos
  //recuadroActual.classList.add("active");
  activated(recuadroActual, false);
};

/************************************************************************
Manejar recuadro activo o inactivo
parametro el elemento ademas @param toggle o add
del elemento obtiene los valores como precio y porcentaje para calcular
precio lista, descuento y total
despues armar un objeto tabla para que muestre los elemento en orden
*************************************************************************/
let activated = (elemento, toggle) => {
  nombre = elemento.firstElementChild.getAttribute("id");
  precios = elemento.firstElementChild.getAttribute("value").split(",");
  indice = parseInt(elemento.lastElementChild.getAttribute("indice"));
  bandera = true;
  //ver si corresponde
  toggle
    ? (bandera = elemento.classList.toggle("active"))
    : elemento.classList.add("active");
  hijos = elemento.children;
  precio = precios[0];

  //precio lista, si es array descuento. monto descontado
  if (hijos.length > 1) {
    indice = parseInt(elemento.lastElementChild.getAttribute("indice"));
    descuento = precios[indice];
  } else {
    descuento = precio;
  }
  diferencia = descuento - precio;
  //console.log(nombre,'lista',precio,'precio final',descuento,'descuento',diferencia);
  //parametro toggle
  //console.log(bandera)
  //si se activo sumar elm.classList.contains("active"))
  //si se desactivo restar
  // bandera define abm, osea agregar o eliminar dependiento de la clase active
  actualizarTabla(nombre, precio, diferencia, descuento, bandera);
};

/************************************************************************
--------------- Manipulación de la tabla --------------------
*************************************************************************/
let actualizarTabla = (nombre, precio, descuento, final, abm) => {
  //crear un elemento que guarde las variables y las borre
  abm
    ? carritoMap.set(nombre, [precio, descuento, final])
    : carritoMap.delete(nombre);
  console.log("este es el mapa actual", carritoMap);
  console.table(carritoMap);

  //ordenar el carrito para que se dibuje con un fragment siempre en el mismo orden del id
  // de los productos

  let container = document.querySelector(".table-container");
  var tabla = document.createElement("table");
  let tablaBody = document.querySelector("tBody");  
  for (let [key, value] of carritoMap) {
    console.log(key,' goes ',value[0],value[1],value[2]);
  }
  tablaBody.innerHTML = `
  <tr>
    <td>clave</td>
    <td>array[0]</td>
    <td>array[1]</td>
    <td>array[2]</td>
  </tr>
  <tr>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
`;

  //despues subdividir en una funcion
  /*

  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var hilera = document.createElement("tr");
  var celda = document.createElement("td");
  var textoCelda = document.createTextNode("celda en la hilera ");
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
  tblBody.appendChild(hilera);
  tabla.appendChild(tblBody);

  let tablaBody = document.querySelector("tBody");
  let fragmentTable =  document.createDocumentFragment();
  newRow = fragmentTable.insertRow();
  newCell = newRow.insertCell(-1);
  newText = document.createTextNode('Hola');
  newCell.appendChild(newText);
  
  tablaBody.appendChild(fragmentTable);

*/

  /*
  let tablaBody = document.querySelector("tBody");
  let array = [nombre, `$${precio}`, `-$${descuento}`, `$${final}`];

  let crear = (index, tabla) => {
    newRow = tabla.insertRow(index);
    array.forEach((item) => {
      newCell = newRow.insertCell(-1);
      newText = document.createTextNode(item);
      newCell.appendChild(newText);
    });
  };
  let eliminar = (index, tabla) => {
    tabla.deleteRow(index);
  };

  let existe = false;
  let largo = tablaBody.rows.length;

  for (let i = 0; i < largo; i++) {
    if (nombre === tablaBody.rows[i].cells[0].innerText) {
      existe = true;
      if (abm) {
        eliminar(i, tablaBody);
        crear(i, tablaBody);
      } else {
        eliminar(i, tablaBody);
        break;
      }
  }}
  if (!existe) {
    crear(-1, tablaBody);
  }
  */
};
//pasar el map para mostrar los totales, si el map esta vacío totales en cero
//usar reduce para iterar en los valores del map y luego crear un array
//y al iterar solo suma

fTablaTotal = (map) => {
  map;
};

// TO DO
//carritoMap.sort()
