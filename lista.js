
let listaSSJ = {
  Cable:{
    1: {id: 'UI-001',nombre:'Abono Basico Cable ',precio:1471,vigente:'si'},
    2: {id: 'UI-002',nombre:'Instalacion Cable ',precio:1350,vigente:'si'},
    3: {id: 'UI-581',nombre:'Instalacion Cable FTTH',precio:1000,vigente:'si'},
    4: {id: 'UI-666',nombre:'Abono Basico Cable FTTH',precio:1471,vigente:'si'},
    },'4Go':{
    1: {id: 'UI-417',nombre:'Instalación HD',precio:2500,vigente:'si'},
    2: {id: 'UI-416',nombre:'Abono basico HD   ',precio:396,vigente:'si'},
    3: {id: 'UI-423',nombre:'Abono basico HD adicional',precio:204,vigente:'si'},
    4: {id: 'UI-451',nombre:'Pack adulto ',precio:240,vigente:'si'},
    5: {id: 'UI-429',nombre:'Abono Fox',precio:516,vigente:'si'},
    6: {id: 'UI-425',nombre:'Abono HBO',precio:516,vigente:'si'},
    7: {id: 'UI-441',nombre:'Pack Futbol',precio:831,vigente:'si'},
    },'Internet HFC':{
    1: {id: 'UI-041',nombre:'Instalacion cablemodem ',precio:2000,vigente:'si'},
    2: {id: 'UI-308',nombre:'Instalacion cablemodem solo internet',precio:2000,vigente:'si'},
    3: {id: 'UI-309',nombre:'Instalacion cablemodem comercial ',precio:1800,vigente:'no'},
    4: {id: 'UI-202',nombre:'10 megas ',precio:1471,vigente:'no'},
    5: {id: 'UI-210',nombre:'20 megas',precio:1546,vigente:'no'},
    6: {id: 'UI-410',nombre:'20 megas comercial',precio:2452,vigente:'no'},
    7: {id: 'UI-673',nombre:'30 megas',precio:1591,vigente:'no'},
    8: {id: 'UI-677',nombre:'50 megas',precio:2040,vigente:'no'},
    9: {id: 'UI-728',nombre:'INTERNET 50/15 MB (CM)',precio:2040,vigente:'si'},
    10: {id: 'UI-757',nombre:'Internet 50 MB Corporativa (CM)',precio:4526,vigente:'si'},
    },'Internet FTTH Hogar':{
    1: {id: '-',nombre:'INTERNET HOGAR FIBRA 20 MEGAS',precio:1546,vigente:'no'},
    2: {id: '-',nombre:'INTERNET HOGAR FTTH 30 MEGAS',precio:2152,vigente:'no'},
    3: {id: '-',nombre:'INTERNET HOGAR FTTH 50 MEGAS ',precio:2643,vigente:'no'},
    4: {id: '-',nombre:'INTERNET HOGAR FIBRA 50 MEGAS',precio:2040,vigente:'no'},
    5: {id: '-',nombre:'INTERNET HOGAR FTTH 50/25 MEGAS ',precio:2040,vigente:'si'},
    6: {id: '-',nombre:'INTERNET HOGAR FTTH 100 MEGAS ',precio:2782,vigente:'no'},
    7: {id: '-',nombre:'INTERNET HOGAR FIBRA 100 MEGAS',precio:2782,vigente:'no'},
    8: {id: '-',nombre:'INTERNET HOGAR FTTH 100/50 MEGAS ',precio:2782,vigente:'si'},
    9: {id: '-',nombre:'INTERNET HOGAR FTTH 200 MEGAS',precio:5403,vigente:'si'},
    10: {id: '-',nombre:'INTERNET HOGAR FTTH 300 MEGAS',precio:7065,vigente:'si'},
    11: {id: '-',nombre:'INTERNET HOGAR FTTH 500 MEGAS',precio:11775,vigente:'si'},
    12: {id: '-',nombre:'Instalacion 30 megas',precio:3000,vigente:'no'},
    13: {id: '-',nombre:'Instalaciones 50 y 100 megas',precio:3000,vigente:'si'},
    },'Internet FTTH COMERCIAL':{
    1: {id: '-',nombre:'Internet ftth 20/6',precio:2846,vigente:'no'},
    2: {id: '-',nombre:'Internet ftth 30/10',precio:3229,vigente:'no'},
    3: {id: '-',nombre:'Internet ftth 50/15',precio:4248,vigente:'si'},
    4: {id: '-',nombre:'Internet ftth 100/20',precio:5953,vigente:'si'},
    5: {id: '-',nombre:'INTERNET COMERCIAL FTTH 200 MEGAS',precio:8110,vigente:'si'},
    6: {id: '-',nombre:'INTERNET COMERCIAL FTTH 300 MEGAS',precio:10604,vigente:'si'},
    7: {id: '-',nombre:'INTERNET COMERCIAL FTTH 500 MEGAS',precio:11775,vigente:'si'},
    8: {id: '-',nombre:'Instalacion 30 megas',precio:5300,vigente:'no'},
    9: {id: '-',nombre:'Instalaciones 50 y 100 megas',precio:3000,vigente:'si'},
    },'Internet FTTH GOBIERNO':{
    1: {id: '-',nombre:'INSTALACION',precio:6000,vigente:'si'},
    2: {id: '-',nombre:'Internet ftth 30/8',precio:5060,vigente:'no'},
    3: {id: '-',nombre:'Internet ftth 50/15',precio:6663,vigente:'si'},
    4: {id: '-',nombre:'Internet ftth 100/20',precio:9331,vigente:'si'},
    5: {id: '-',nombre:'Internet ftth 200',precio:16208,vigente:'si'},
    },'Otros servicios ':{
    1: {id: '3',nombre:'Gastos administrativos',precio:50,vigente:'si'},
    2: {id: '349',nombre:'Recargo y Gastos administrativos',precio:115,vigente:'si'},
    3: {id: '4',nombre:'Recargo por pago fuera de término (luego 1er.Vto.y hasta 2do.Vto.)',precio:81,vigente:'si'},
    4: {id: '327',nombre:'1ra. Reconexión',precio:500,vigente:'si'},
    5: {id: '328',nombre:'2da. Reconexión',precio:700,vigente:'si'},
    6: {id: '329',nombre:'3ra. Reconexión o posterior',precio:900,vigente:'si'},
    7: {id: '354',nombre:'Multa por compartir señal',precio:3500,vigente:'si'},
    8: {id: 'UI-047',nombre:'Tp Link TLW 850 N',precio:3000,vigente:'si'},
    9: {id: 'UI-414',nombre:'Tp Link C 20',precio:4000,vigente:'si'},
    10: {id: 'UI-415',nombre:'Tp Link C 7',precio:8500,vigente:'si'},
    11: {id: 'UI-007',nombre:' Boca Adicional',precio:700,vigente:'si'},
    12: {id: 'UI-312',nombre:' Amplificador Domiciliario',precio:5500,vigente:'si'},
    13: {id: 'UI-051',nombre:' Boca de red lan hasta 40 mts.',precio:800,vigente:'si'},
    14: {id: '396',nombre:'Visita tecnica ',precio:750,vigente:'si'},
    15: {id: '398',nombre:'Visita tecnica consorcios',precio:600,vigente:'si'},
    16: {id: 'UI-314',nombre:'Reubicacion boca adicional',precio:700,vigente:'si'},
    17: {id: 'UI-315',nombre:'Reubicacion boca internet',precio:700,vigente:'si'},
    18: {id: 'UI-180',nombre:'IP Publica Fija',precio:2000,vigente:'si'},
    19: {id: 'UI-014',nombre:'Cambio de acometida',precio:1000,vigente:'si'},
    20: {id: '688',nombre:'Control remoto',precio:600,vigente:'si'},
    },'Otros servicios ':{
    1: {id: 'UI-077',nombre:'INTERNET COMERCIAL 1MB/512KB',precio:1184,vigente:'si'},
    2: {id: 'UI-085',nombre:'INTERNET COMERCIAL 2048/512',precio:2091,vigente:'si'},
    3: {id: 'UI-109',nombre:'INTERNET COMERCIAL 3072/3072',precio:4780,vigente:'si'},
    4: {id: 'UI-117',nombre:'INTERNET COMERCIAL 4096/2048',precio:4267,vigente:'si'},
    5: {id: 'UI-125',nombre:'INTERNET COMERCIAL 4096/4096',precio:5666,vigente:'si'},
    6: {id: 'UI-133',nombre:'INTERNET COMERCIAL 8192/1024',precio:8160,vigente:'si'},
    7: {id: 'UI-200',nombre:'Internet Comercial 10240/1024',precio:8659,vigente:'si'},
    8: {id: 'UI-201',nombre:'Internet Comercial 10240/3072',precio:9629,vigente:'si'},
    9: {id: 'UI-223',nombre:'Internet Comercial 8192/2048',precio:6497,vigente:'si'},
    10: {id: 'UI-256',nombre:'Internet Comercial 15360/2048',precio:8589,vigente:'si'},
    11: {id: 'UI-260',nombre:'Internet Comercial 20480/2048',precio:9877,vigente:'si'},
    12: {id: 'UI-341',nombre:'INTERNET DEDICADO SIMETRICO 2048/2048',precio:6641,vigente:'si'},
    13: {id: 'UI-345',nombre:'INTERNET DEDICADO SIMETRICO 6 MEGAS',precio:14579,vigente:'si'},
    14: {id: 'UI-352',nombre:'INTERNET 25 MEGAS DEDICADO',precio:44175,vigente:'si'},
    15: {id: 'UI-410',nombre:'INTERNET 20/2 MB COMERCIAL',precio:2292,vigente:'si'},
    16: {id: 'UI-556',nombre:'INTERNET DEDICADO SIMETRICO 60 MEGAS',precio:99511,vigente:'si'},
    17: {id: 'UI-347',nombre:'ABONO CONEXION PTO A PTO SOBRE FIBRA OPTICA',precio:23499,vigente:'si'},
    },'VLAN':{
    1: {id: 'UI-153',nombre:'VLAN 1024/1024 (PC)',precio:1191,vigente:'si'},
    2: {id: 'UI-161',nombre:'VLAN 1024/1024 (MC)',precio:1269,vigente:'si'},
    3: {id: 'UI-165',nombre:'VLAN 1024/1024 (GC)',precio:2991,vigente:'si'},
    4: {id: 'UI-169',nombre:'VLAN 2048/2048 (GC)',precio:4985,vigente:'si'},
    5: {id: 'UI-192',nombre:'VLAN 2048/2048 (MC)',precio:4105,vigente:'si'},
    6: {id: 'UI-560',nombre:'VLAN FTTH 20/20',precio:4985,vigente:'si'},
    7: {id: 'UI-564',nombre:'VLAN FTTH 50/50',precio:6472,vigente:'si'},
    8: {id: 'UI-568',nombre:'VLAN FTTH 100/100',precio:8416,vigente:'si'},
    9: {id: 'UI-183',nombre:'SERVICIO DE DNS SECUNDARIO',precio:350,vigente:'si'},
    }
}

let dibujar = (lista)=>{
  const fragment = document.createDocumentFragment();
  let container = document.querySelector(".content");
  let tabla = document.createElement("table");
  let row = document.createElement("tr");
  let inner ='';

  Object.keys(lista).map(
    agrupador => {
      inner+=`<tr><th>${agrupador}</th><tr>`;
      inner+=`<tr>
      <th>Identificador</th>
      <th>Item</th>
      <th>Precio</th>
      <th>Vigente</th>
      <tr>`;
      Object.values(lista[agrupador]).map(elemento=>{
     

        inner+=`<tr>          
          <td>${elemento.id}</td>
          <td>${elemento.nombre}</td>
          <td>${elemento.precio} </td>
          <td>${elemento.vigente} </td>          
        </tr>
        `
      })
    }
  )
  tabla.innerHTML=inner;
  fragment.appendChild(tabla)
  container.innerHTML = "";
  container.appendChild(fragment);

 /* let agrupadores = Object.keys(lista)
  agrupadores.map(item =>Object.values(lista[item]).map(el=>Object.entries(el).map(e=>{

    
  
 })))*/
}
dibujar(listaSSJ);