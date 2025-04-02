import express from 'express';
import dotenv from 'dotenv'
import ContectRoutes from './Routes/ContectRoutes.js'
import cors from 'cors';

dotenv.config({});
 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true

}));
const corsoption = {origin:"*", Credentials:true};

app.use(cors(corsoption));
app.use('/api',ContectRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)

})

