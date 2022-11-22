const mongoose = require('mongoose');

const  { DB_PASSWORD, DB_NAME, DB_USER }= require('./config')

const url=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.aja99ai.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;
