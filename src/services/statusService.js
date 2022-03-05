const { deleteMany } = require("../models/statusModel");
const Status = require("../models/statusModel");

module.exports = class statusService {

    static async getStatusbyId(statusId) {
      try {
        const status = await Status.findById({ _id: statusId });
        if(status == null){
          console.log("Status não encontrado!");
        }
        return status;
      } catch (error) {
        console.log(`Erro interno no servidor. ${error}`);
      }
    }

    static async getAllStatus(){
        try {
            const allStatus = await Status.find();   
              return allStatus;   
            
        } catch (error) {
            console.log(`Ocorreu um erro ao retornar os dados`);
        }

    }

    static async addStatus(data){
        try {
            const newStatus = {
                id: data.id,
                tipo: data.tipo
               
            };
            const response = await new Status(newStatus).save();
            return response;

        }   catch (error){
            console.log(error);
        }
    }

    static async updateStatus(id, status) {
        try {
          const updateResponse = await Status.updateOne(
            { _id: id },
            { ...status}
          );
    
          return updateResponse;
        } catch (error) {
          console.log(`Não foi possível atualizar este Usuario ${error}`);
        }
    }
    
    static async deleteStatus(statusId) {
      try {
        const deletedResponse = await Status.findOneAndDelete({ _id: statusId });
    
        return deletedResponse;
        
      } catch (error) {
        console.log(`Não foi possível deletar este usuario ${error}`);
      }
    }

    static async deleteTodosStatus() {
      try {
        const deletedAllResponse = await Status.deleteMany();
        return deletedAllResponse;
      } catch (error) {
        res.status(500).json(`Ocorreu um erro!`);
      }
    }

}