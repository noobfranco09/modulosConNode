# BackEnd de la aplicacion
- verificar la version del aplicacion (node -v)
- use siempre la version de LTS(Long Time Support - soporte o garantia a largo plazo)
- paquetes basicos:
    nodemon : para que actualice el servidor ante los cambios
    express : para hacer las rutas de los metodos http (get, post, put, delete)
    cors : administrar la seguridad de las ip Cross-Origin Resource Sharing, o intercambio de recursos de origen cruzado en español
    mysql : capa para conectar con la base de datos mysql - mariadb

- instalamos todos los paquetes que usaremos npm i express nodemon cors mysql2
- se va a trabajar con ECMA6 por lo tanto habilitamos los modulos en el package.json "type": "module"