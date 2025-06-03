// importamos la libreria
import express from 'express'
import "dotenv/config"

// instanciamos la libreria express en la constante app (heredamos todos los metodos de express)
const app = express();

// primera ruta
app.get("/",(req, res)=>{

    res.send('hola mundo node.js');

});

// encendemos la api asignandole un puerto
app.listen(process.env.PORT,()=>{
    console.log(`api ejecutandose en el puerto ${puerto}`);
});
