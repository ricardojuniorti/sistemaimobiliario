
const { create } = require("../models/usuariosModel");
const usuarioService = require("../services/usuarioService");

exports.get = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.params.id;
  
    try {
      const usuarios = await usuarioService.getUsuariobyId(id);
      if(!usuarios){
        res.status(404).json({error: "Registro não encontrado!"});
      }
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error});
    }
};

exports.getAll = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const usuarios = await usuarioService.getAllUsuarios();

        if(!usuarios){
            return res.status(404).json({message: "Nenhum registro encontrado!"});
        }
        res.json(usuarios);
    }catch (error) {
      res.status(500).json({ error: error});
    }
}

exports.add = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
  
        if(!req.body.perfilusuario || !req.body.nome){ // campos obrigatorios
          res.status(422).json({ error: 'Campos obrigatórios não preenchidos!'});
        }
        else{
          const createdUsuario = await usuarioService.addUsuario(req.body);
          res.status(201).json({message: 'Registro cadastrado com sucesso!'});
          console.log(createdUsuario);
        }

    }catch (error) {
      res.status(500).json({ error: error});
    }

}

exports.update = async (req, res) => {
    //let id = req.params.id;
    res.setHeader('Access-Control-Allow-Origin', '*');
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
  
      const updatedUsuario = await usuarioService.updateUsuario(req.body._id, usuario);
  
      if (updatedUsuario.nModified === 0) {
        return res.status(404).json({});
      }
  
      res.json(updatedUsuario);
    } catch (error) {
      res.status(500).json({ error: error });
    }
};
  
exports.delete = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //let id = req.params.id;
    try {
      const deleteResponse = await usuarioService.deleteUsuario(req.body._id);
      res.json({deleteResponse});
    } catch (error) {
      res.status(500).json({ error: error });
    }
};

exports.deleteAll = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const deletedAllResponse = await usuarioService.deleteTodosUsuarios();
    res.json(deletedAllResponse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};