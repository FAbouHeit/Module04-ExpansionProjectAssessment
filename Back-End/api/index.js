import express from "express";
import db from './models/index.js'
import productRouter from './routers/product.router.js'
import authRouter from './routers/auth.router.js'
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors())
const PORT = 5000;

app.use('/product',productRouter);
app.use('/auth', authRouter);

const main = async() =>{
try{
    app.listen(PORT, ()=>{
        console.log("Server Started At Port: ", + PORT);
    })

    await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync({alter: true});
        console.log('Database synced!');
} catch(err){
    console.log(err.message)
}
}
main();