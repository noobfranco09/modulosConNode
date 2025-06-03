//crear las rutas de la api para los modulos

import express from express;
import miconexion from conexion.js
//Rutas del módulo aprendiz,instanciar el método router de express en la constante aprendices
const aprendiz = express.Router();


//crear métofo post,put,get,delete con su ruta correspondiente





//listar todos los aprendices

aprendiz.get('/aprendiz/listarTodos',async (req, rea) => {
    let consulta = "select*from aprendiz"
    
    //ejecutamos la consulta y guardamos el resultado en un arreglo de objectos
    let [resultado] = await miconexion.query(consulta)
    //Respuesta enviada desde el servidor
    res.send({resultado})
})
export default aprendiz