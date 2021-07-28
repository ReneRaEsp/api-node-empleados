import mongoose,{Schema} from 'mongoose';

const empleadoSchema =  new Schema({
	nombre:{type:String, maxlength:50, unique:false, rquired:true},
	apellido:{type:String, maxlength:50},
	documento:{type:String, maxlength:20},
	salario:{type:Number}
});

const Empleado = mongoose.model('empleado', empleadoSchema);

export default Empleado;
