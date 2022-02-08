
const { create } = require("../models/perfil_usuarioModel");
const perfil_usuarioService = require("../services/perfil_usuarioService");

exports.get = async (req, res) => {
    let id = req.params.id;
  
    try {
      const perfil_usuario = await perfil_usuarioService.getPerfil_usuariobyId(id);
      res.json(perfil_usuario);
    } catch (error) {

      res.status(500).json({ error: error });
    }
};

exports.getAll = async (req, res) => {
    try {
        const perfil_usuarios = await perfil_usuarioService.getAllPerfil_usuarios();

        if(!perfil_usuarios){
            return res.status(404).json({message:"Nenhum registro encontrado!"});
        }
        res.json(perfil_usuarios);
    }catch (error) {
        return res.status(500).json({error: error});
    }
}

exports.add = async (req, res) => {
    try {
        const createdPerfil_usuario = await perfil_usuarioService.addPerfil_usuario(req.body);
        res.status(201).json(createdPerfil_usuario);
    }catch (error) {
        return res.status(500).json({ error: error});
    }

}

exports.update = async (req, res) => {
    let id = req.params.id;
  
    try {
      const perfil_usuario = {};
      perfil_usuario.descricao = req.body.descricao;
      perfil_usuario.dataCriacao = req.body.dataCriacao;
      perfil_usuario.dataAtualizacao = req.body.dataAtualizacao;
  
      const updatedPerfil_usuario = await perfil_usuarioService.updatePerfil_usuario(id, perfil_usuario);
  
      if (updatedPerfil_usuario.nModified === 0) {
        return res.status(404).json({});
      }
  
      res.json(updatedPerfil_usuario);
    } catch (error) {
      res.status(500).json({ error: error });
    }
};
  
exports.delete = async (req, res) => {
    //let id = req.params.id;
  
    try {
      const deleteResponse = await perfil_usuarioService.deletePerfil_usuario(req.body._id);
      if(!deleteResponse){
        return res.status(404).json({message: "registro não encontrado!"});  
      }
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
};

exports.deleteAll = async (req, res) => {
 
  try {
    const deletedAllResponse = await perfil_usuarioService.deleteTodosPerfil_Usuarios();
    res.json(deletedAllResponse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};