const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');
require('dotenv').config();


const app = express();


app.use(express.json());
app.use((req, res) => {
    res.json({msg: "Endpoint não encontrado"});
});

//credencias 

const dbUser = process.env.DB_USER
const dbPW = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:<${dbPW}>@cluster0.oa1it.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('Conecção estabeleciada')
}).catch((err) => console.log(err, "Conecção não estabelecida"))

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});