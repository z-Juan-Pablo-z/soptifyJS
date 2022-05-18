//PASOS PARA CONSUMIR UNA API CON JS PURO

//1. DECLARO LA URI (Donde voy a buscar )
const URI ="https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg/top-tracks?market=US"

//2. DECLARO LOS PARAMETROS DE LA PETICION (Que voy a hacer)
const TOKEN = "Bearer BQAhnb-auMHUkW9mo3Lu7zByGwDe8qx27zzd5wQQXhpXq2GN1Tsq2omJ-UyBfGd_LSHoA3P5a6MPiDSCtXXVmZZXFuMiLxIVXKdBLY1ZB0iSsaqiNkA6stQlckA8HC5-CQyxy8iYdHs1uMrpS2fS2cs5V7rvTRy6T7k"
const PETICION={
    method:"GET",
    headers:{
       Authorization:TOKEN
    }
}

//RUTINA PARA CONSUMIR API CON METODO POST
//1. URI PARA DONDE VOY 
const URIPOST="https://accounts.spotify.com/api/token"

//2. ALMACENO LOS DATOS DE ENVIO 
let granttype="grant_type=client_credentials"
let clienteid = "client_id=e7959ef7663f49fb92c9a42d8adba32b"
let clienteSec="client_secret=52171f3afdc446e09af68c5b3056b38b"

//3. CONFIGURO LA PETICION
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:granttype+'&'+clienteid+'&'+clienteSec
}
//4 VOY AL SERVIDOR  A CONSUMIR EL SERVICIO

fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta);
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token);
})

.catch(function(respuesta){
    console.log(respuesta);
})


//3. DECLARO EL FETCH (Voy al servidor , taxista)
/*
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta);// Esta respuesta es un Objeto con atributos
    console.log(respuesta.tracks)// Es un arreglo de Objetos (Ya se puede jugar a buscar los objetos dentro del arreglo)(10 canciones)
    /*console.log(respuesta.tracks[0].preview_url)// Es un arreglo de Objetos (Ya se puede jugar a buscar los objetos dentro del arreglo)
    respuesta.tracks.forEach(function(tracks){
        console.log(tracks.preview_url);
        
    });
    pintarCanciones(respuesta.tracks)
    
})
.catch(function(error){
    console.log(error);
})

//FUNCION PARA RECORRER UN ARREGLO
function pintarCanciones(canciones) {
    ///console.log(canciones);
    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion);
        console.log(cancion.name);
        console.log(cancion.preview_url);
        console.log(cancion.album.images[0]);

        //rutina para llenar 
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let nombre = document.createElement("h5")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let foto = document.createElement("img")
        foto.classList.add("h-100")
        foto.classList.add("w-100","img-fluid")
        foto.src=cancion.album.images[0].url

        let audio = document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url
        

        //padres e hijos
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    });
    
}*/