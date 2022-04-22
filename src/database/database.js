const mongoose = require('mongoose');

const connectionToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/xis-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((err) => console.log(`Erro ao conectar ao MongoDB, erro: ${err}`));
};


module.exports = connectionToDatabase;
