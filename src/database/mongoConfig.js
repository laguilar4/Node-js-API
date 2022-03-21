import mongoose from 'mongoose';
const mongoConfg = {};

mongoConfg.connection = async() => {
    try {
        await mongoose.connect('mongodb://localhost/testdb');
        console.log('Mongo Db is Connected');
    } 
    catch (error) {
        console.log(error);  
    }
}

mongoConfg.endconnection = async() => {
    try {
        await mongoose.connection.close();
        console.log('Mongo Db is closed');
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoConfg;
