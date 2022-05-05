let porcentajes = ["0%", "20%", "30%", "40%"];
let coeficiente = [1, 0.8, 0.7, 0.6];
let cuarenta = [1540,2099]
let total = 0;
let totalDescuentos = 0;
let montoDescuento = 0;

document.addEventListener("click", (e) => {
  //###          Stepper########
  if (e.target.textContent === "add") {
    let numero = e.target.previousElementSibling;
    let valuePorcentaje = numero.getAttribute("value");
    3 < 3 ? valuePorcentaje++ : (valuePorcentaje = 0);

    domPorcentaje(numero, valuePorcentaje);

    valuePrevio = valuePorcentaje > 0 ? valuePorcentaje - 1 : 3;

    calcular(numero, valuePrevio, valuePorcentaje);
  }
  if (e.target.textContent === "remove") {
    let numero = e.target.nextElementSibling;
    let valuePorcentaje = numero.getAttribute("value");
    valuePorcentaje > 0 ? valuePorcentaje-- : (valuePorcentaje = 3);

    domPorcentaje(numero, valuePorcentaje);

    valuePrevio = valuePorcentaje < 3 ? parseInt(valuePorcentaje) + 1 : 0;

    calcular(numero, valuePrevio, valuePorcentaje);
  }

  //#######Recuadro########

  if (e.target.classList.contains("item")) {
    elm = e.target.parentNode;

    valueItem = parseInt(elm.firstElementChild.getAttribute("value"));
    valuePorcentaje =
      elm.children[1] === undefined
        ? 0
        : elm.children[1].children[1].getAttribute("value");
    monto = parseInt(descuentos(valueItem, valuePorcentaje));
    clase = elm.parentNode.className
    if(clase === 'wrapper-internet' ) {
      if (valuePorcentaje == 3){
        if(monto === 1560){ monto = cuarenta[0]}
        if (monto === 2142){monto = cuarenta[1]}
      }
    }
    if (!elm.classList.contains("active")) {
      totalDescuentos += monto;
      total += valueItem;
      montoDescuento += valueItem - monto;

      nombre = elm.firstElementChild.textContent;
      descuento = valueItem - monto;

      actualizarTabla(nombre, valueItem, descuento, monto, true);
      seleccionarUno(elm);
    } else {
      totalDescuentos -= monto;
      total -= valueItem;
      montoDescuento -= valueItem - monto;

      nombre = elm.firstElementChild.textContent;
      descuento = valueItem - monto;
      actualizarTabla(nombre, valueItem, descuento, monto, false);
    }
    elm.classList.toggle("active");
  }

  document.querySelector("#descuentos").textContent = `$${totalDescuentos}`;
  document.querySelector("#total").textContent = `$${total}`;
  document.querySelector("#montoDescuento").textContent = `-$${montoDescuento}`;
  fTablaTotal(totalDescuentos, montoDescuento, total);
});

let descuentos = (item, index) => {
  return parseInt(parseFloat(item * coeficiente[index]).toFixed(0));
};

let domPorcentaje = (numero, index) => {
  numero.textContent = porcentajes[index];
  numero.setAttribute("value", index);
};

let calcular = (numero, valuePrevio, valuePorcentaje) => {
  
  let elm = numero.parentNode.parentNode;
  clase = elm.parentNode.className
  
  let valueItem = parseInt(elm.firstElementChild.getAttribute("value"));
  let monto = parseInt(descuentos(valueItem, valuePorcentaje));
  if(clase === 'wrapper-internet' ) {
    if (valuePorcentaje == 3){
      if(monto === 1560){ monto = cuarenta[0]}
      if (monto === 2142){monto = cuarenta[1]}
    }
  }
  if (!elm.classList.contains("active")) {
    if(clase === 'wrapper-internet' ){

      seleccionarUno(elm);
    }

    elm.classList.add("active");
    total += valueItem;
    totalDescuentos += monto;
    montoDescuento += parseInt(valueItem) - monto;
  } else {
    totalDescuentos -= descuentos(valueItem, valuePrevio);
    montoDescuento -= parseInt(valueItem) - descuentos(valueItem, valuePrevio);
    totalDescuentos += monto;
    montoDescuento += parseInt(valueItem) - monto;
  }
  document.querySelector("#descuentos").textContent = `$${totalDescuentos}`;
  document.querySelector("#total").textContent = `$${total}`;
  document.querySelector("#montoDescuento").textContent = `-$${montoDescuento}`;

  nombre = elm.firstElementChild.textContent;
  descuento = valueItem - monto;
  actualizarTabla(nombre, valueItem, descuento, monto, true);
  fTablaTotal(totalDescuentos, montoDescuento, total);
};

let seleccionarUno = (elm) => {
  if (elm.parentNode.classList.contains("wrapper-internet")) {
    hijos = elm.parentNode.children;
    for (let index = 0; index < hijos.length; index++) {
      if (hijos[index].classList.contains("active")) {
        hijos[index].classList.remove("active");
        valueItem = parseInt(
          hijos[index].firstElementChild.getAttribute("value")
        );
        valuePorcentaje =
          hijos[index].children[1] === undefined
            ? 0
            : hijos[index].children[1].children[1].getAttribute("value");
        monto = parseInt(descuentos(valueItem, valuePorcentaje));
        if(clase === 'wrapper-internet' ) {
          if (valuePorcentaje == 3){
            if(monto === 1560){ monto = cuarenta[0]}
            if (monto === 2142){monto = cuarenta[1]}
          }
        }
        totalDescuentos -= monto;
        total -= valueItem;
        montoDescuento -= valueItem - monto;

        nombre = hijos[index].firstElementChild.textContent;
        descuento = valueItem - monto;
        actualizarTabla(nombre, valueItem, descuento, monto, false);
      }
    }
  }
};

let actualizarTabla = (nombre, precio, descuento, final, abm) => {
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
};

fTablaTotal = (totalDescuentos, montoDescuento, total) => {
  tablaTotal = document.querySelector("tFoot");
  celdas = tablaTotal.rows[0].cells;
  celdas[3].textContent = `$${totalDescuentos}`;
  celdas[2].textContent = `-$${montoDescuento}`;
  celdas[1].textContent = `$${total}`;
};
