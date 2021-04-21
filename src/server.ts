import express from 'express';
import './database'

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Olá NLW 05' })
});

app.post('/', (request, response) => {
  return response.json({ message: 'Usuário salvo com sucesso!' })
})

app.listen(3333, () => console.log('Server is run on port 3333'));