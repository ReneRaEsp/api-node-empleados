import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import router from "./routes";

//conexion a la bd mongo

mongoose.Promise = global.Promise;
//const dbUrl =  'mongodb://localhost/dbsistema';
const dbUrl = "mongodb+srv://reneraesp:Autopropio0.@cluster0.cazyv.mongodb.net/dbsistema?retryWrites=true&w=majority";

mongoose
  .connect(dbUrl, {
  	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
  }).then((mongoose) => console.log('conectado a la BD en el puerto 27017'))
	  .catch((err) => console.log(err));

const app=express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')));

app.use("/api", router);

app.listen(PORT, ()=>{
	console.log(`Server on port: ${PORT}`);
});

