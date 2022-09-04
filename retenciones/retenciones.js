const reteSSJ = [['Servicio','Codigo','1ra 30% 6 meses','2da 40% 6 meses','3ra 30% 6 meses'],
['Cable','ui-001','549','935','942'],
['Cable Ftth','ui-666','781','936','943'],
['4go HD','ui-416','796','963','966'],
['50/15 CM','UI-728','644','937','944'],
['50/25 FTTH Router','UI-732','730','938','945'],
['50/25 FTTH Bridge','UI-736','731','939','946'],
['100/50 FTTH Router','UI-740','732','940','947'],
['100/50 FTTH Bridge','UI-744','733','941','948'],
['Nuevo 100/50 FTTH Router','UI-776','959','961','964'],
['Nuevo 100/50 FTTH Bridge','UI-792','960','962','965']]

const retePalpala = [['Servicio','Codigo','1ra 30% 6 meses','2da 40% 6 meses','3ra 30% 6 meses'],
['Cable Ftth','UI-580','554','949','954'],
['4go HD','UI-716','797','971','974'],
['50/25 FTTH Router','UI-719','734','950','955'],
['50/25 FTTH Bridge','UI-718','735','951','956'],
['100/50 FTTH Router','UI-721','736','952','957'],
['100/50 FTTH Bridge','UI-720','737','953','958'],
['Nuevo 100/50 FTTH Router','UI-788','967','969','972'],
['Nuevo 100/50 FTTH Bridge','UI-804','968','970','973']]

const renderTable = (array,element) =>{let contenido = ''

array.forEach((linea,index)=> {
    console.log(contenido);
    index === 0?contenido+= '<thead>':contenido+= '<tr>';
    console.log(index)
    linea.forEach(item=>{
        
        item.includes('Nuevo')? contenido+= '<td class="nuevo">'+item+'</td>':contenido+= '<td>'+item+'</td>'
        
    })
    index === 0?contenido+= '</thead>':contenido+= '</tr>';
})
element.innerHTML= contenido}

const tableSSJ = document.getElementById("reteSSJ")
const tablePalpala = document.getElementById("retePalpala")
renderTable(reteSSJ,tableSSJ)
renderTable(retePalpala,tablePalpala)