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

*/