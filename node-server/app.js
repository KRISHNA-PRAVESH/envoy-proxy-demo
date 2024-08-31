const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
   console.log("home route called..");
	res.sendFile( __dirname + '/views/index.html');
});

app.listen(port,() => {
	console.log("app is running on port 3000");
});
