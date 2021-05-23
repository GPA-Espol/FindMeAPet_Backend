import express from 'express';
import morgan from 'morgan';
import animalRoutes from './routes/animal.routes';

const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.json('welcome');
});
app.use('/animal',animalRoutes);

export default app;