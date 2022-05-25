
//RUTINA PARA CONSUMIR API CON METODO POST
//1. URI PARA DONDE VOY 
const URI="https://accounts.spotify.com/api/token"

//2. ALMACENO LOS DATOS DE ENVIO 
let granttype="grant_type=client_credentials"
let clienteid = "client_id=e7959ef7663f49fb92c9a42d8adba32b"
let clienteSec="client_secret=52171f3afdc446e09af68c5b3056b38b"

//3. CONFIGURO LA PETICION
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:granttype+'&'+clienteid+'&'+clienteSec
}

//4. CONSUMIR SERVICIO
export async function generarToken(){
    let respuesta=await fetch(URI,PETICION)
    return (respuesta.json())
}