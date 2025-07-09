import mongoose from 'mongoose';

export async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://Grupo-12:grupo12@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexion exitosa a MongoDB');
    }catch(err){
        console.error('Error al conectar a MongoDB: ', error);
        process.exit(1);
    }
}