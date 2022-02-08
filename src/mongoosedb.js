const mongoose = require("mongoose");

const user = "admin";
const pass = "1qazxsw2";
const database = "sistema_imobiliario";
const serverName = "cluster0.gjv9e.mongodb.net";

module.exports = {
    init: () => {
        mongoose
            .connect(
                `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    //useFindAndModify: false,
                    //useCreateIndex: true,
                }
            )
            .then((res) => console.log(`conexao ao mongo com sucesso:${res}`))
            .catch((err) => console.log(err));
    },

};
