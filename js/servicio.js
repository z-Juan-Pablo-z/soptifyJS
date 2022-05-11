//PASOS PARA CONSUMIR UNA API CON JS PURO

//1. DECLARO LA URI (Donde voy a buscar )
const URI ="https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg/top-tracks?market=US"

//2. DECLARO LOS PARAMETROS DE LA PETICION (Que voy a hacer)
const TOKEN = "Bearer BQCdAuGlNYKo9yEKTNm_lFNQntz1RvA52YRyQFEhDjfv8M0AVKOLCvfmvgkMm2ZaY7alciq0yleM6bEVdQyYT0YGqQgHuuboWT6cVCaAbAoiWD9J41pj3lzQ2WHBWFN-GzwQCEVwQAXZXtoeLVh539XpncL9VvWT2rE"
const PETICION={
    method:"GET",
    headers:{
       Autorization:TOKEN
    }
}
//3. DECLARO EL FETCH (Voy al servidor , taxista)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta);// Esta respuesta es un Objeto con atributos
    console.log(respuesta.tracks[0])// Es un arreglo de Objetos (Ya se puede jugar a buscar los objetos dentro del arreglo)
    console.log(respuesta.tracks[0].preview_url)// Es un arreglo de Objetos (Ya se puede jugar a buscar los objetos dentro del arreglo)
    respuesta.tracks.forEach(function(){
        
    });
    
})
.catch(function(error){
    console.log(error);
})