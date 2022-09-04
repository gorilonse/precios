session = ()=>{
    const logueado = sessionStorage.getItem('logeado');
    if (!logueado){ 
        window.location = "/login.html"; 
    }
}

session()