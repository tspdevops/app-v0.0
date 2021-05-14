/*APP DEPENDENCIES*/
const express = require('express');
const morgan =require('morgan');
/*ENVIROMENT VARIABLES*/
const PORT = process.env.PORT || 8080
/*INITIALIZE PROCESS*/
const app =express();
/*MIDDLEWARES*/
/*ROUTES*/
app.get('/', (req, res)=>{
	res.status(200).send('yeah baby')
});
/*SERVER START*/
app.listen( PORT, ()=>{
	console.log(`Server is running on port ${PORT}`)	
});

