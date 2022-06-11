const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');
require('dotenv').config();


const app = express();


app.use(express.json());
app.use((req, res) => {
    res.json({msg: "Endpoint não encontrado"});
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});