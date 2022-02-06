const { deleteMany } = require("../models/perfil_usuarioModel");
const Todo = require("../models/perfil_usuarioModel");

module.exports = class perfil_usuarioService {

    static async getPerfil_usuariobyId(perfil_usuarioId) {
      try {
        const perfil_usuario = await perfil_usuarioColecao.findById({ _id: perfil_usuarioId });
        return perfil_usuario;
      } catch (error) {
        console.log(`Registro não encontrado. ${error}`);
      }
    }

    static async getAllPerfil_usuarios(){
        try {
            const allPerfil_usuarios = await perfil_usuarioColecao.find();   
              return allPerfil_usuarios;   
            
        } catch (error) {
            console.log(`Ocorreu um erro ao retornar os dados`);
        }

    }

    static async addPerfil_usuario(data){
        try {
            const newPerfil_usuario = {
                descricao: data.descricao,
                dataCriacao: data.dataCriacao,
                dataAtualizacao: data.dataAtualizacao,
            };
            const response = await new perfil_usuarioColecao(newPerfil_usuario).save();
            return response;

        }   catch (error){
            console.log(error);
        }
    }

    static async updatePerfil_usuario(id, perfil_usuario) {
        try {
          const updateResponse = await perfil_usuarioColecao.updateOne(
            { _id: id },
            { ...perfil_usuario, dataAtualizacao: new Date() }
          );
    
          return updateResponse;
        } catch (error) {
          console.log(`Não foi possível atualizar este Usuario ${error}`);
        }
    }
    
    static async deletePerfil_usuario(perfil_usuarioId) {
      try {
        const deletedResponse = await perfil_usuarioColecao.findOneAndDelete({ _id: perfil_usuarioId });
        return deletedResponse;
      } catch (error) {
        console.log(`Não foi possível deletar este usuario ${error}`);
      }
    }

    static async deleteTodosPerfil_Usuarios() {
      try {
        const deletedAllResponse = await perfil_usuarioColecao.deleteMany();
        return deletedAllResponse;
      } catch (error) {res.status(201).json(`Registro adicionado com sucesso!`);
        console.log(`Não foi possível deletar todos${error}`);
      }
    }

}