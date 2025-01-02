const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'root',
    database: "user_management"
});
 
connection.connect(function(error){
    //if (error) throw error;
    try {
        console.log("Database is connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    
});

module.exports = connection;