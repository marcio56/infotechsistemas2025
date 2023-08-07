//verbos ou métodos http (protocolo de conversa entre o cliente e servidor) - express (rotas ou routes)
//get (ver), post (criar), put (editar), delete 

//importando as nossas bibliotecas
const express = require("express")
const app = express()
const uri = "mongodb+srv://dbuser:dbuser@cluster0.cctlbjn.mongodb.net/?retryWrites=true&w=majority"
const {MongoClient} = require("mongodb-legacy")
const ObjectId = require('mongodb-legacy').ObjectId
const client  = new MongoClient(uri)
const db = client.db("crud-db")
const collection = db.collection("crud")

app.post('/contact', function(req, res) {
  const nome = req.body.nome;
  const email = req.body.email;
  const mensagem = req.body.mensagem;

  // Crie um objeto com os dados do contato
  const contact = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };

  // Conecte-se ao MongoDB e insira o documento
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.error('Erro ao conectar ao MongoDB:', err);
      return res.status(500).send('Erro ao conectar ao banco de dados.');
    }

    const db = client.db(dbName);
    const collection = db.collection('contact');

    collection.insertOne(contato, function(err, result) {
      if (err) {
        console.error('Erro ao inserir o contato:', err);
        return res.status(500).send('Erro ao inserir o contato.');
      }

      console.log('Contato inserido com sucesso:', result.insertedId);
      client.close();
      return res.status(200).send('Contato inserido com sucesso.');
    });
  });
});

