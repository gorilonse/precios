document.addEventListener("click",(evt)=>{
    console.log(evt.target);

    if(evt.target.matches("#cable-btn")){
        if (document.querySelector("#total").textContent===""){
            document.querySelector("#total").textContent="$1900"
        } else 
        document.querySelector("#total").textContent=""
    }

});