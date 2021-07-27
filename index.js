import express from "express";
const morgan = require("morgan");
const cors = require("cors");

const app=express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, ()=>{
	console.log(`Server on port: ${PORT}`);
});

