import mysql from "mysql2"
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'handa098610@',
  database : 'project1',
  port     : "23306"
});

export default connection;