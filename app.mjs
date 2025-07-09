import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs'
import methodOverride from 'method-override';

const app = express();
const PORT = process.env.PORT || 3000;

//Configurando EJS como el motor de vistas de la app
app.set('view engine', 'ejs');

//Middleware para parsear JSON
app.use(express.json());

//Middleware para aprsear el body
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));

//Conexion a MongoDB
connectDB();

//Configuracion de rutas
app.use('/api', superHeroRoutes);

//Manejo de errores para rutas no econtradas
app.use((req,res)=>{
    res.status(404).send({mensaje: 'Ruta no encontrda'});
});



//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})