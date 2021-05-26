import express from 'express';
import morgan from 'morgan';
import mascotaRoutes from './routes/mascota.routes';

const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.json('welcome');
});
app.use('/mascota',mascotaRoutes);

export default app;