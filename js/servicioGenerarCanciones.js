import { generarToken } from "./servicioGenerarToken.js";

//LLAMAR A LA FUNCION GENERAR TOKEN
let tokenRespuesta =await generarToken();
let token =`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`;

//URI DE SERVICIO
const URI ="https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg/top-tracks?market=US";

const PETICION={
    method:"GET",
    headers:{
       Authorization:token
    }
}

//CONSUMO EL SERVICIO 
export async function obtenerCanciones(){
    let respuesta = await fetch(URI,PETICION);
    return respuesta.json();
}


