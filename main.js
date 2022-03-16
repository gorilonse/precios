let totalabono = 0;
let cableabono=0;
let netabono = 0;
let hdabono=0;
let futbolabono =0;
let hboabono=0;
let adultoabono=0;


document.addEventListener("click",(evt)=>{
    
    
    if(evt.target.matches("#cable-btn")){
        if (document.querySelector("#totalcable").textContent==="Cable $1900"){
            document.querySelector("#totalcable").textContent=""
            cableabono=0;
        } else 
        {document.querySelector("#totalcable").textContent="Cable $1900"
        cableabono=1900;    
    }
    }
    if(evt.target.matches("#cable-40")){
       
            document.querySelector("#totalcable").textContent=`Cable $${1900*0.6} 40%`
            cableabono=1900*0.6;
        
    }
    if(evt.target.matches("#cable-30")){
        
            document.querySelector("#totalcable").textContent=`Cable $${1900*0.7} 30%`
            cableabono=1900*0.7;

       
    }
    if(evt.target.matches("#cable-20")){
      
            document.querySelector("#totalcable").textContent=`Cable $${1900*0.8} 20%`
            cableabono=1900*0.8;

        
    }
    if(evt.target.matches("#internet50-btn")){
        if (document.querySelector("#totalnet").textContent==="Internet $2600"){
            document.querySelector("#totalnet").textContent=""
            netabono = 0;
        } else 
        {document.querySelector("#totalnet").textContent="Internet $2600"
        netabono = 2600;
    }
    }
    if(evt.target.matches("#internet50-40")){
       
            document.querySelector("#totalnet").textContent=`Internet $${2600*0.6} 40%`
            netabono = 2600*0.6;
    }
    if(evt.target.matches("#internet50-30")){
            let net30=parseFloat(2600*0.7).toFixed(0)
            document.querySelector("#totalnet").textContent=`Internet $${net30} 30%`
            netabono = parseInt(net30);
    }
    if(evt.target.matches("#internet50-20")){
       
            document.querySelector("#totalnet").textContent=`Internet $${2600*0.8} 20%`
            netabono = 2600*0.8;
    }

    if(evt.target.matches("#hd-btn")){
        if (document.querySelector("#totalhd").textContent==="HD $500"){
            document.querySelector("#totalhd").textContent=""
            hdabono=0;
        } else {document.querySelector("#totalhd").textContent="HD $500"
        hdabono=500;}
    }
    if(evt.target.matches("#hd-btn-40")){
       
        document.querySelector("#totalhd").textContent=`HD $${500*0.6} 40%`
        hdabono=500*0.6;
    }
    if(evt.target.matches("#hd-btn-30")){
       
        document.querySelector("#totalhd").textContent=`HD $${500*0.7} 30%`
        hdabono=500*0.7;
    }
    if(evt.target.matches("#hd-btn-20")){
       
        document.querySelector("#totalhd").textContent=`HD $${500*0.8} 20%`
        hdabono=500*0.8;
    }

    if(evt.target.matches("#futbol-btn")){
        if (document.querySelector("#totalfutbol").textContent==="Futbol $1120"){
            document.querySelector("#totalfutbol").textContent=""
            futbolabono =0;
        } else 
        {document.querySelector("#totalfutbol").textContent="Futbol $1120"
        futbolabono =1120;}
    }
    if(evt.target.matches("#hbo-btn")){
        if (document.querySelector("#totalhbo").textContent==="HBO $630"){
            document.querySelector("#totalhbo").textContent=""
            hboabono=0;
        } else 
        {document.querySelector("#totalhbo").textContent="HBO $630"
        hboabono=630;    
    }
    }
    if(evt.target.matches("#adulto-btn")){
        if (document.querySelector("#totaladultos").textContent==="Adulto $300"){
            document.querySelector("#totaladultos").textContent=""
            adultoabono=0;
        } else 
        {document.querySelector("#totaladultos").textContent="Adulto $300"
        adultoabono=300;    
    }
    }

    console.log('total','cable','net','hd','hbo','futbol','adulto');
    totalabono=cableabono+netabono+hdabono+hboabono+futbolabono+adultoabono;
    console.log(totalabono,cableabono,netabono,hdabono,hboabono,futbolabono,adultoabono);
    totales();

});

let totales = ()=>{document.querySelector('#total').textContent=`Totales $${totalabono}`;}