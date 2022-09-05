session = ()=>{
    const logueado = sessionStorage.getItem('logeado');
    if (!logueado){ 
        window.location = "https://gukoa4.github.io/precios/index.html"; 
    }
}

session()