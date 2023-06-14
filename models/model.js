
let mysql = require("mysql2")

function connection(){
   let connection= mysql.createConnection ({
        host: "127.0.0.1",
        port : 3306,
        user : "root",
        password : 'mysql123456',
        database : 'mern_bootcamp'
    })
    return connection.promise();
};
module.exports = connection;