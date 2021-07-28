import models from '../models/models';
export default {
	add:async (req,res,next) =>{
		try{
			const reg = await models.Empleado.create(req.body);
			res.status(200).json(reg);
		}catch(e){
			res.status(500).send({
				message:'Ocurrio un error'
			});
			next(e);
		};
	},
	list:async (req,res,next) =>{
		try{
			const reg = await models.Empleado.find();
			res.status(200).json(reg);
		}catch(e){
			res.status(500).send({
				message:'Ocurrio un error'
			});
			next(e);
		};
	},
	update:async (req,res,next) =>{
		try{
			const reg = await models.Empleado.findByIdAndUpdate(
				{_id:req.body._id},{nombre:req.body.nombre}
			);
			res.status(200).json(reg);
		}catch(e){
			res.status(500).send({
				message:'Ocurrio un error'
			});
			next(e);
		};
	}
};
