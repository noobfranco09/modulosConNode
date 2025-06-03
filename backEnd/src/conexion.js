// modularizado

/* import mysql from 'mysql2';

export async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'adso',
      password: ''
    });
    console.log("✅ Conexión a la base de datos exitosa.");
    return connection;
  } catch (err) {
    console.error("❌ Error al conectar a la base de datos:", err);
    throw err;
  }
} */

import mysql from 'mysql2/promise';

try {
  const miConexion = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'adso',
    password: ''
  });
  const sql = "SELECT * FROM aprendiz";
//const [rows, fields] = await miConexion.query(sql);
  const [rows] = await miConexion.query(sql);
  console.log(rows);
  //console.log(fields);
} catch (err) {
  console.error("Error al conectar:", err);
}
