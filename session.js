session = ()=>{
    const logueado = sessionStorage.getItem('logeado');
    if (!logueado){ 
        window.location = "/index.html"; 
    }
}

session()