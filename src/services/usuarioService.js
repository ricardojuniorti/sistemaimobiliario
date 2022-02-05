const { deleteMany } = require("../models/usuariosModel");
const Todo = require("../models/usuariosModel");

module.exports = class usuarioService {

    static async getUsuariobyId(usuarioId) {
      try {
        const usuario = await usuariosColecao.findById({ _id: usuarioId });
        return usuario;
      } catch (error) {
        console.log(`Usuario não encontrado. ${error}`);
      }
    }

    static async getAllUsuarios(){
        try {
            const allUsuarios = await usuariosColecao.find();   
              return allUsuarios;   
            
        } catch (error) {
            console.log(`Ocorreu um erro ao retornar os dados`);
        }

    }

    static async addUsuario(data){
        try {
            const newUsuario = {
                nome: data.nome,
                endereco: data.endereco,
                telefone: data.telefone,
                cpf:      data.cpf,
                profissao: data.profissao,
                dataCriacao: data.dataCriacao,
                dataAtualizacao: data.dataAtualizacao,
            };
            const response = await new usuariosColecao(newUsuario).save();
            return response;

        }   catch (error){
            console.log(error);
        }
    }

    static async updateUsuario(id, usuario) {
        try {
          const updateResponse = await usuariosColecao.updateOne(
            { _id: id },
            { ...usuario, dataAtualizacao: new Date() }
          );
    
          return updateResponse;
        } catch (error) {
          console.log(`Não foi possível atualizar este Usuario ${error}`);
        }
    }
    
    static async deleteUsuario(usuarioId) {
      try {
        const deletedResponse = await usuariosColecao.findOneAndDelete({ _id: usuarioId });
        return deletedResponse;
      } catch (error) {
        console.log(`Não foi possível deletar este usuario ${error}`);
      }
    }

    static async deleteTodosUsuarios(usuarioId) {
      try {
        const deletedAllResponse = await usuariosColecao.deleteMany();
        return deletedAllResponse;
      } catch (error) {res.status(201).json(`Registro adicionado com sucesso!`);
        console.log(`Não foi possível deletar todos${error}`);
      }
    }

}