const retencion = {
    SSJ: [
      [
        "Servicio",
        "Codigo",
        "1ra 30% 6 meses",
        "2da 40% 6 meses",
        "3ra 30% 6 meses",
      ],
      ["Cable", "ui-001", "549", "935", "942"],
      ["Cable Ftth", "ui-666", "781", "936", "943"],
      ["4go HD", "ui-416", "796", "963", "966"],
      ["50/15 CM", "UI-728", "644", "937", "944"],
      ["50/25 FTTH Router", "UI-732", "730", "938", "945"],
      ["50/25 FTTH Bridge", "UI-736", "731", "939", "946"],
      ["100/50 FTTH Router", "UI-740", "732", "940", "947"],
      ["100/50 FTTH Bridge", "UI-744", "733", "941", "948"],
      ["Nuevo 100/50 FTTH Router", "UI-776", "959", "961", "964"],
      ["Nuevo 100/50 FTTH Bridge", "UI-792", "960", "962", "965"],
    ],
    Palpala: [
      [
        "Servicio",
        "Codigo",
        "1ra 30% 6 meses",
        "2da 40% 6 meses",
        "3ra 30% 6 meses",
      ],
      ["Cable Ftth", "UI-580", "552", "949", "954"],
      ["4go HD", "UI-716", "797", "971", "974"],
      ["50/25 FTTH Router", "UI-719", "734", "950", "955"],
      ["50/25 FTTH Bridge", "UI-718", "735", "951", "956"],
      ["100/50 FTTH Router", "UI-721", "736", "952", "957"],
      ["100/50 FTTH Bridge", "UI-720", "737", "953", "958"],
      ["Nuevo 100/50 FTTH Router", "UI-788", "967", "969", "972"],
      ["Nuevo 100/50 FTTH Bridge", "UI-804", "968", "970", "973"],
    ],
  };
  
  const competencia = {
    SSJ: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      ["Cable", "UI-001", "760", "Cable HFC 1 mes gratis Competencia "],
      ["Cable Ftth", "UI-666", "761", "Cable Ftth 1 mes gratis Competencia "],
      ["Internet 50MB", "UI-728", "762", "50 MB HFC 1 mes gratis Competencia "],
      [
        "Internet FTTH 50MB",
        "UI-732",
        "763",
        "50 MB Ftth 1 mes gratis Competencia ",
      ],
      [
        "Nuevo Internet FTTH 100/50MB",
        "UI-776",
        "905",
        "100MB Ftth 1 mes gratis Competencia",
      ],
    ],
    Palpala: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      [
        "Cable Ftth Palpala",
        "UI-580",
        "765",
        "Cable Ftth 1 mes gratis Competencia  Palpala",
      ],
      [
        "Internet FTTH 50MB Router",
        "UI-719",
        "766",
        "50 MB Ftth 1 mes gratis Competencia  Palpala",
      ],
      [
        "Nuevo Internet FTTH 100MB ",
        "UI-788",
        "906",
        "100MB Ftth 1 mes gratis Competencia Palpala",
      ],
    ],
  };
  
  const migracion = {
    SSJ: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      [
        "Internet 50MB",
        "UI-728",
        "883",
        "Migracion 10 a 50 MB HFC 26,55% 6 meses",
      ],
      [
        "Internet 50MB",
        "UI-728",
        "884",
        "Migracion 20 a 50 MB HFC 22,4% 6 meses",
      ],
      [
        "Internet FTTH 50MB",
        "UI-732",
        "885",
        "Migracion 10 a 50 MB FTTH 26,55% 6 meses",
      ],
      [
        "Internet FTTH 50MB",
        "UI-732",
        "886",
        "Migracion 20 a 50 MB FTTH 22,4% 6 meses",
      ],
      [
        "Nuevo Internet FTTH 100/50MB",
        "UI-776",
        "887",
        "Migracion 10 a 100 MB FTTH 42,43% 6 meses",
      ],
      [
        "Nuevo Internet FTTH 100/50MB",
        "UI-776",
        "888",
        "Migracion 20 a 100 MB FTTH 39,18% 6 meses",
      ],
      [
        "Nuevo Internet FTTH 100/50MB",
        "UI-776",
        "889",
        "Migracion 50 a 100 MB FTTH 21,6% 6 meses",
      ],
    ],
    Palpala: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      [
        "Internet FTTH 50MB Bridge",
        "UI-718",
        "891",
        "Migracion 10 a 50 MB Bridge 23,14% 6 meses Palpala",
      ],
      [
        "Internet FTTH 50MB Bridge",
        "UI-718",
        "904",
        "Migracion 20 a 50 MB Bridge 10,04% 6 meses Palpala",
      ],
      [
        "Internet FTTH 50MB Router",
        "UI-719",
        "890",
        "Migracion 10 a 50 MB FTTH 23,14% 6 meses Palpala",
      ],
      [
        "Internet FTTH 50MB Router",
        "UI-719",
        "903",
        "Migracion 20 a 50 MB FTTH 10,04% 6 meses Palpala",
      ],
      [
        "Nuevo Internet FTTH 100MB ",
        "UI-788",
        "892",
        "Migracion 10 a 100 MB FTTH 46,5% 6 meses Palpala",
      ],
      [
        "Nuevo Internet FTTH 100MB ",
        "UI-788",
        "893",
        "Migracion 20 a 100 MB FTTH 37,38% 6 meses Palpala",
      ],
      [
        "Nuevo Internet FTTH 100MB ",
        "UI-788",
        "894",
        "Migracion 50 a 100 MB FTTH 30,39% 6 meses Palpala",
      ],
    ],
  };
  
  const anual = {
    SSJ: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      ["Cable", "UI-001", "822", "Pago anual Abono Basico Cable"],
      ["IP Publica Fija", "UI-180", "834", "Pago anual IP Publica Fija"],
      ["internet 20/2 MB", "UI-210", "826", "Pago anual internet 20 MB"],
      ["4go HD", "UI-416", "825", "Pago anual HD 4go"],
      ["HBO", "UI-425", "819", "Pago anual HBO"],
      ["Pack Futbol", "UI-441", "821", "Pago anual Pack Futbol"],
      ["Adultos", "UI-451", "820", "Pago anual Adultos"],
      ["Cable Ftth", "UI-666", "827", "Pago anual Abono Basico Cable Ftth"],
      ["Internet 50MB", "UI-728", "823", "Pago anual Internet 50 HFC"],
      ["Internet FTTH 50MB", "UI-732", "828", "Pago anual Internet 50 FTTH"],
      ["Internet FTTH 100/50MB", "UI-740", "824", "Pago anual Internet 100 FTTH"],
    ],
    Palpala: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      ["IP Publica Fija", "UI-180", "834", "Pago anual IP Publica Fija Palpala"],
      ["HBO", "UI-425", "819", "Pago anual HBO Palpala"],
      ["Pack Futbol", "UI-441", "821", "Pago anual Pack Futbol Palpala"],
      ["Adultos", "UI-451", "820", "Pago anual Adultos Palpala"],
      ["Cable Ftth Palpala", "UI-580", "830", "Pago anual Cable  Palpala"],
      ["4go HD Palpala", "UI-716", "832", "Pago anual HD 4go Palpala"],
      [
        "Internet FTTH 50MB Router",
        "UI-719",
        "831",
        "Pago anual internet 50 MB Palpala",
      ],
      [
        "Internet FTTH 100MB ",
        "UI-721",
        "833",
        "Pago anual internet 100 MB Palpala",
      ],
    ],
  };
  
  const premium = {
    SSJ: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      ["HBO", "UI-425", "288", "2 decos 50% descuento HBO"],
      ["HBO", "UI-425", "291", "3 decos 50% descuento HBO"],
      ["HBO", "UI-425", "294", "4 decos 50% descuento HBO"],
      ["HBO", "UI-425", "296", "5 decos 50% descuento HBO"],
      ["Adultos", "UI-451", "289", "2 decos 50% descuento Adultos"],
      ["Adultos", "UI-451", "292", "3 decos 50% descuento Adultos"],
    ],
    Palpala: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      ["HBO", "UI-425", "288", "2 decos 50% descuento HBO"],
      ["HBO", "UI-425", "291", "3 decos 50% descuento HBO"],
      ["HBO", "UI-425", "294", "4 decos 50% descuento HBO"],
      ["HBO", "UI-425", "296", "5 decos 50% descuento HBO"],
      ["Adultos", "UI-451", "289", "2 decos 50% descuento Adultos"],
      ["Adultos", "UI-451", "292", "3 decos 50% descuento Adultos"],
    ],
  };
  const venta = {
    SSJ: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      ["Cable", "UI-001", "931", "Cable HFC 40% descuento 12 meses "],
      ["Cable Ftth", "UI-666", "929", "Cable Ftth 40% descuento 12 meses "],
      ["Internet 50MB", "UI-728", "927", "50 MB HFC 40% descuento 12 meses "],
      [
        "Internet FTTH 50MB",
        "UI-732",
        "928",
        "50 MB Ftth 40% descuento 12 meses ",
      ],
      [
        "Nuevo Internet FTTH 100/50MB",
        "UI-776",
        "933",
        "100MB Ftth 40% descuento 12 meses",
      ],
    ],
  
    Palpala: [
      ["Servicio", "Codigo", "Politica", "Descripcion"],
      [
        "Cable Ftth Palpala",
        "UI-580",
        "930",
        "Cable Ftth 40% descuento 12 meses Palpala",
      ],
      [
        "Internet FTTH 50MB Router",
        "UI-719",
        "934",
        "50 MB HFC 40% descuento 12 meses Palpala",
      ],
      [
        "Nuevo Internet FTTH 100MB ",
        "UI-788",
        "932",
        "50 MB Ftth 40% descuento 12 meses Palpala",
      ],
    ],
  };
  
  /*
   *Lista de politicas
   */
  let obListas = {
    retencion,
    competencia,
    migracion,
    anual,
    premium,
    venta,
  };
  
  /*
   * @param toma un array y lo dibuja en una tabla del dom
   */
  const renderTable = (array, element) => {
    let contenido = "";
  
    array.forEach((linea, index) => {
      index === 0 ? (contenido += "<thead>") : (contenido += "<tr>");
      linea.forEach((item) => {
        item.includes("Nuevo")
          ? (contenido += '<td class="nuevo">' + item + "</td>")
          : (contenido += "<td>" + item + "</td>");
      });
      index === 0 ? (contenido += "</thead>") : (contenido += "</tr>");
    });
    element.innerHTML = contenido;
  };
  
  /****
   * usar una sola tabla del dom con distintos atributos para los estilos
   * 
   * 
    tablePal.classList.add("oculto");
    btnssj.classList.remove("noactive");
    bOTON = 'SSJ'
  console.log(retenciones[bOTON]);
  
  table class palpala
  lista="retenciones"
  bOTON = 'SSJ'
  console.log(obListas[lista][bOTON]);
  */
  
  const table = document.getElementById("tablet");
  
  //eventlistener
  botonera.addEventListener("click", (e) => {
    elemento = e.target;
    if (elemento.tagName === "BUTTON") {
      hermanos = elemento.parentElement.children;
      for (let hermano of hermanos) {
        hermano.classList.remove("btnActive");
      }
      elemento.classList.add("btnActive");
    }
    SSJ.click();
  });
  
  lugar.addEventListener("click", (e) => {
    elemento = e.target;
    if (elemento.tagName === "BUTTON") {
      hermanos = elemento.parentElement.children;
      for (let hermano of hermanos) {
        hermano.classList.add("noactive");
      }
      elemento.classList.remove("noactive");
      elemento.innerText === "Palpala"
        ? tablet.classList.add("palpala")
        : tablet.classList.remove("palpala");
    }
  
    //buscar el elemento activo para pasarlo al render
    tipos = botonera.children;
    for (let tipo of tipos) {
      if (tipo.className.includes("btnActive")) {
        lista = tipo.id;
      }
    }
    renderTable(obListas[lista][elemento.id], table);
  
    if (lista === "retencion") {
      if (elemento.id === "SSJ") {
        ihtml = `<h3>Importante</h3>
          <p>En el UI-668 del servicio 50 megas FTTH de San Salvador no impactan políticas de retención</p>
          <p>Se debe migrar al UI-732 para que las políticas impacten sobre la facturación</p>`;
      } else {
        ihtml = ` <h3>Importante</h3> <p> En el UI-471 del servicio 50 megas FTTH de Palpala no impactan políticas de retención</p>
          <p>Se debe migrar al UI-719 para que las políticas impacten sobre la facturación</p>
          `;
      }
    } else {
      ihtml = "";
    }
    alerta.innerHTML = ihtml;
  });
  document.getElementById("retencion").click();