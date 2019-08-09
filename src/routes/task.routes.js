const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//obtener todo
router.get('/',async(req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
     
    });
//obtener una tarea
router.get('/:id', async (req, res) => {
        const task = await Task.findById(req.params.id);
        res.json(task);
      });

// Guardar
    router.post('/', async (req, res) => {
        const { title, description } = req.body;
        const task = new Task({title, description});
        await task.save();
        res.json({status: 'Task Saved'});
      });

//Actualizar
   router.put('/:id',async(req,res)=> {
        const {title ,description} = req.body;
        const newTask = {title,description};
        await Task.findByIdAndUpdate(req.params.id,newTask)
        console.log(req.params.id);
        res.json({status: 'actualizado'});
   });

 //Eliminar
   router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
  });



module.exports= router;