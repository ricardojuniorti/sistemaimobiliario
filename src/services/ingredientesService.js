const { deleteMany } = require("../models/ingredientesModel");
const Ingredientes = require("../models/ingredientesModel");

module.exports = class ingredientesService {

    static async getIgredientebyId(ingredientesId) {
      try {
        const ingredientes = await Ingredientes.findById({ _id: ingredientesId });
        return ingredientes;
      } catch (error) {
        console.log(`Usuario não encontrado. ${error}`);
      }
    }

    static async getAllIngredientes(){
        try {
            const allIngredientes = await Ingredientes.find();   
              return allIngredientes;   
            
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