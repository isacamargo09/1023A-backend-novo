import 'dotenv/config'
import mysql from'mysql2/promise';
console.log(process.env.DBUSER);

import express, {Request,Response} from 'express';
const app = express();

app.get ('/', async (req:Request, res:Response) => {
    if(!process.env.DBUSER){//! significa que é a negação da variável
        res.status(500).send("Variável de ambiente DBUSER não está definida");
        return;
    }
    if(process.env.DBPASSWORD==undefined){
        res.status(500).send("Variável de ambiente DBPASSWORD não está definida");  
        return;
    }
    if(!process.env.DBHOST){
        res.status(500).send("Variável de ambiente DBHOST não está definida");  
        return;
    }
    if(!process.env.DBNAME){
        res.status(500).send("Variável de ambiente DBNAME não está definida");  
        return;
    }
    if(!process.env.DBPORT){
        res.status(500).send("Variável de ambiente DBPORT não está definida");  
        return;
    }
    try{
    const connection = await mysql.createConnection({
        host: process.env.DBHOST,   
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
        port: Number(process.env.DBPORT)
    });
    res.send("Conectado ao banco de dados com sucesso!");
    await connection.end();
    }
    catch(error){
        res.status(500).send("Erro ao conectar ao banco de dados: " + error);
    }

});
app.listen(8000, () => {
    console.log('Server is running on port 8000')
});

//Tarefa: criar uma rota get para produtos que retorna a lista de produtos do banco de dados
//O produto deve ter id, nome, preço, urlfoto,descricao
//Deve-se criar uma tabela no banco de dados AIVEN para armazenar os produtos
//A resposta deve ser um array de produtos em formato JSON
//Crie o codigo sql para criar a tabela de produtos
/*
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    urlfoto VARCHAR(255),
    descricao TEXT
);
Faz pelo menos 3 inserções nessa tabela
*/