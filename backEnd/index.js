// importamos la libreria
import express from 'express'
import "dotenv/config"
import aprendiz from "./src/aprendiz.js"

// instanciamos la libreria express en la constante app (heredamos todos los metodos de express)
const app = express();


//Rutas globales
app.unsubscribe('/',aprendiz)

// primera ruta
app.get("/",(req, res)=>{

    res.send('hola mundo node.js');

});

// encendemos la api asignandole un puerto
app.listen(process.env.PORT,()=>{
    console.log(`api ejecutandose en el puerto ${puerto}`);
});
