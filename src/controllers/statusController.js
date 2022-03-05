
const { create } = require("../models/statusModel");
const statusService = require("../services/statusService");

exports.get = async (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    let id = req.params.id;

    try {
      const status = await statusService.getStatusbyId(id);
      
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({ error: error});
    }
};

exports.getAll = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const status = await statusService.getAllStatus();

        if(!status){
            return res.status(404).json({message: "Nenhum registro encontrado!"});
        }
        res.json(status);
    }catch (error) {
      res.status(500).json({ error: error});
    }
}

exports.add = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
  
        const createdStatus = await statusService.addStatus(req.body);
        res.status(201).json({message: 'Registro cadastrado com sucesso!'});
        console.log(createdStatus);
        
    }catch (error) {
      res.status(500).json({ error: error});
    }

}

exports.update = async (req, res) => {
    //let id = req.params.id;
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
      const status = {};
      status.tipo = req.body.tipo;
     
      const updatedStatus = await statusService.updateStatus(req.body._id, status);
  
      if (updatedStatus.nModified === 0) {
        return res.status(404).json({});
      }
  
      res.json(updatedStatus);
    } catch (error) {
      res.status(500).json({ error: error });
    }
};
  
exports.delete = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.params.id;
    try {
      const deleteResponse = await statusService.deleteStatus(id);
      res.json({deleteResponse});
    } catch (error) {
      res.status(500).json({ error: error });
    }
};

exports.deleteAll = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const deletedAllResponse = await statusService.deleteTodosStatus();
    res.json(deletedAllResponse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};