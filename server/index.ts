const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Rota para servir o arquivo HTML
app.get('/', (req: any, res: any) => {
  res.json({ data: "It Works!"});
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});