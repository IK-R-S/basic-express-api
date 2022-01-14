// Configurações
const express = require('express');

const app = express();

const porta = 3000

// Rotas comuns
app.get('/', (req, res) => {
    res.send('Funcionou!')
})

app.get('/sobre', (req, res) => {
    res.send('API desenvolvida em nodejs utilizando Express. | por: krs')
})

// Rotas com parâmetros
app.get('/boas-vindas', (req, res) => {
    res.send('Escreva seu nome no endereço. exemplo: http://127.0.0.1:3000/boas-vindas/Maria')
})

app.get('/boas-vindas/:nome', (req, res) => {
    res.send(`Bem vindo(a) ${req.params.nome}`)
})


// Renderizando uma pasta com arquivos na API (Imagens nesse caso)
app.use(express.static('./imagens'))

// Iniciar servidor
app.listen(porta, () => {console.log(`Servidor da API rodando na porta ${porta} 🚀 | localhost:${porta}`)})