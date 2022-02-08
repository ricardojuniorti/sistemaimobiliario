const { deleteMany } = require("../models/usuariosModel");
const Usuarios = require("../models/usuariosModel");

module.exports = class usuarioService {

    static async getUsuariobyId(usuarioId) {
      try {
        const usuario = await Usuarios.findById({ _id: usuarioId });
        return usuario;
      } catch (error) {
        console.log(`Usuario não encontrado. ${error}`);
      }
    }

    static async getAllUsuarios(){
        try {
            const allUsuarios = await Usuarios.find().populate('perfilusuario');   
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
                cpf: data.cpf,
                email: data.email,
                perfilusuario: data.perfilusuario,
                profissao: data.profissao,
                login: data.login,
                senha: data.senha,
                dataCriacao: data.dataCriacao,
                dataAtualizacao: data.dataAtualizacao,
            };
            const response = await new Usuarios(newUsuario).save();
            return response;

        }   catch (error){
            console.log(error);
        }
    }

    static async updateUsuario(id, usuario) {
        try {
          const updateResponse = await Usuarios.updateOne(
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
        const deletedResponse = await Usuarios.findOneAndDelete({ _id: usuarioId });
        return deletedResponse;
      } catch (error) {
        console.log(`Não foi possível deletar este usuario ${error}`);
      }
    }

    static async deleteTodosUsuarios() {
      try {
        const deletedAllResponse = await Usuarios.deleteMany();
        return deletedAllResponse;
      } catch (error) {
        res.status(500).json(`Ocorreu um erro!`);
      }
    }

}