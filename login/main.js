let posteos = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {return response.json()})


let mostrar = async ()=>{
    await posteos
    console.log(posteos);
}
mostrar()