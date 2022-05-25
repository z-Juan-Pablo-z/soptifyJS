import{obtenerCanciones} from "./servicioGenerarCanciones.js"
import{pintarCanciones}from "./pintarCanciones.js"

//LLAMAR A LA FUNCION OBTENER LAS CANCIONES 
let canciones =await obtenerCanciones();


//LLAMAR LA FUNCION PINTAR CANCIONES 
pintarCanciones(canciones.tracks)

