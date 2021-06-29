const mysql = require('mysql');

const connection = mysql.createConnection({
      host: 'localhost',
      port:3306,
      user: 'root',
      password: 'CodeAllTheThings!',
      database: 'burgers_db'
});


connection.connect((err) => {
   if (err) {
      console.error('Unable to connect: ' + err.stack);
      return;
   }
   console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;