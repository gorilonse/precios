colecion = document.getElementsByClassName('md_view');
arrayC = Array.from(colecion, item => 
    {
        let el = item.firstChild.firstChild; 
        if(el.tagName=='DIV') return el.textContent
    
    });
arrayC = arrayC.filter((elem)=>(elem!==undefined))

console.log(arrayC);

let duplicados = [];
const tempArray = [...arrayC].sort();
//algoritmo
for (let i = 0; i <tempArray.length; i++){
    if (tempArray[i+1] === tempArray[i]){
        duplicados.push(tempArray[i]);
    }
}
if(duplicados.length>0){console.log(`Se encontraron ${duplicados.length} duplicados`,duplicados)}
else {console.log('no hay duplicados')}

/*[
    "110375 - FELIX OSCAR CRUZ",
    "225756 - NESTOR HUGO  FARFAN",
    "228470 - MELINDA SOLEDAD DEL VALLE FLORES",
    "214125 - LUIS ALBERTO  ORTEGA",
    "202572 - JUAN ARTURO CHUMACERO",
    "217665 - GLADIS DEL MILAGRO PAVON",
    "44059 - LUCIANO  TEJERINA",
    "6061 - CIRILO DEMETRIO TEJERINA",
    "217051 - CELIA ALICIA MACHACA",
    "221429 - LEON JOSE MARTINEZ",
    "223512 - ERIC TIAGO EXAEL VENTURA",
    "112546 - ULRICO  GRUBER",
    "234295 - SUSANA BEATRIZ MORENO",
    "227946 - MARIA ASUCENA FARFAN"
]*/

//buscar duplicado