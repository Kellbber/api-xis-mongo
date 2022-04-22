const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/xis.route')
const connectionToDatabase = require('./src/database/database')

connectionToDatabase();
app.use(express.json());
app.use(cors());
app.use('/xis', routes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
