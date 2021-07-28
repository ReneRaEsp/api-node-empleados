import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app=express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
	console.log(`Server on port: ${PORT}`);
});

