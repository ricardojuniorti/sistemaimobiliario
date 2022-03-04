const app = require("./app");
const db = require("./mongoosedb");
var cors = require('cors')

app.use(cors())

db.init();

const port = process.env.PORT || 3003;

app.listen(port, function () {
    console.log(`Servidor rodando na porta: ${port}`);
});