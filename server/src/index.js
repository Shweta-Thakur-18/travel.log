const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const cors=require('cors');

const mongoose = require('mongoose');
console.log('Environment Variables:', process.env);

require('dotenv').config();

const middleware=require('./middleware');

const logs=require('./api/logs') ;

const app= express();

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//const app= express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin:process.env.CORS_ORIGIN,
}));
app.use(express.json());//rrrsourece sharing header

app.get('/',(req,res)=>{
    res.json({
        message:"Hello World!",
    });
});
app.use('/api/logs',logs) ;

app.use(middleware.notFound);
app.use(middleware.errorHandler);



const port = process.env.PORT || 1337;

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})