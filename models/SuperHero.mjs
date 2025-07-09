import mongoose from 'mongoose';

const superheroeSchema = new mongoose.Schema(
    {
        nombreSuperHeroe : { type: String, required: true},
        nombreReal: { type: String, required: true},
        edad: { type: Number, min: 0},
        planetaOrigen: { type: String, default: 'Desconocido'},
        debilidad: String,
        poderes: [String],
        aliados: [String],
        enemigos: [String],
        createdAt: { type: Date, default: Date.now},
        creador: String
    });

const SuperHero = mongoose.model('SuperHero', superheroeSchema, 'Grupo-12');
export default SuperHero;