
let login = ()=>{
    const loginBtn = document.querySelector('#submit');
    loginBtn.addEventListener('click',evt => verificar(evt))
}
let verificar =(evt)=>{
    evt.preventDefault()
    let ValidEmail = document.querySelector('#username').value.trim() === 'elcuatro';
    let ValidPassword = document.querySelector('#password').value.trim() === 'elcuatro2022';
    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
        document.querySelector('.valid').style.display = 'block';
        sessionStorage.setItem('logeado', true);
        window.location = "https://gukoa4.github.io/precios/descuentos.html"; // go to home.html
    }
    else {
        document.querySelector('.error').style.display = 'block'; // show error msg
    }
}

let session = ()=>{
    const logueado = sessionStorage.getItem('logeado');
    if (logueado){ 
        window.location = "https://gukoa4.github.io/precios/descuentos.html"; 
    }

}




session()
login()