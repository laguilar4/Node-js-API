import mysql from 'mysql';
const mysqlConfg = {};

mysqlConfg.configConnection = async () => 
{
    mysql.createConnection(
        {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'test'
        });
}

mysqlConfg.connection = async () =>
{
    try {
        await mysqlConfg.configConnection.connect();
        console.log('Mysql db is connected');
    } 
    catch (error) {
        console.log(error);
    }
}

mysqlConfg.endconnection = async () => 
{
    try {
        await connection.end();
        console.log('Mysql connection is closed');
    } catch (error) {
        console.log(error);
    }
}

module.exports = mysqlConfg