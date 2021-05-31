import express from 'express';
import morgan from 'morgan';
import mascotaRoutes from './routes/mascota.routes';
import authRoutes from './routes/auth.routes';
import jwt from 'jsonwebtoken';
const app = express();


app.use(express.json());
// app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.json('welcome');
});
app.use('/mascota',mascotaRoutes);
app.use('/auth',authRoutes);

export default app;