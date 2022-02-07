
const { create } = require("../models/usuariosModel");
const usuarioService = require("../services/usuarioService");

exports.get = async (req, res) => {
    let id = req.params.id;
  
    try {
      const usuarios = await usuarioService.getUsuariobyId(id);
      res.json(usuarios);
    } catch (err) {
      res.status(500).send("Erro ao tentar listar o usuario");
    }
};

exports.getAll = async (req, res) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();

        if(!usuarios){
            return res.status(404).json("Nenhum usuario encontrado!");
        }
        res.json(usuarios);
    }catch (err) {
      res.status(500).send("Erro ao tentar listar todos usuarios");
    }
}

exports.add = async (req, res) => {
    try {
        const createdUsuario = await usuarioService.addUsuario(req.body);
        res.status(201).json(createdUsuario);
        
    }catch (err) {
      res.status(500).send("Erro ao tentar gravar usuario");
    }

}

exports.update = async (req, res) => {
    let id = req.params.id;
  
    try {
      const usuario = {};
      usuario.nome = req.body.nome;
      usuario.endereco = req.body.endereco;
      usuario.telefone = req.body.telefone;
      usuario.cpf = req.body.cpf;
      usuario.email = req.body.email;
      usuario.login = req.body.login;
      usuario.senha = req.body.senha;
      usuario.perfilusuario = req.body.perfilusuario;
      usuario.profissao = req.body.profissao;
      usuario.dataCriacao = req.body.dataCriacao;
      usuario.dataAtualizacao = req.body.dataAtualizacao;
  
      const updatedUsuario = await usuarioService.updateUsuario(id, usuario);
  
      if (updatedUsuario.nModified === 0) {
        return res.status(404).json({});
      }
  
      res.json(updatedUsuario);
    } catch (error) {
      res.status(500).json({ error: error });
    }
};
  
exports.delete = async (req, res) => {
    //let id = req.params.id;
  
    try {
      const deleteResponse = await usuarioService.deleteUsuario(req.body._id);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
};

exports.deleteAll = async (req, res) => {
 
  try {
    const deletedAllResponse = await usuarioService.deleteTodosUsuarios();
    res.json(deletedAllResponse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};