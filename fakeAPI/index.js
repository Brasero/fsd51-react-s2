import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const user = {
  email: 'test@test.fr',
  mdp: '1234'
}

const app = express()

const Router = express.Router()

Router.all('/', (req, res) => {
  if (!req.body.email) {
    return res.status(401).send('Empty body')
  }
  if(req.body.email !== user.email || req.body.mdp !== user.mdp) {
     return res.status(401).send('Wrong credential')
  }
  return res.status(200).send({token: jwt.sign({email: user.email}, 'secret', {expiresIn: '1h'})})
})

Router.get('/isConnected', (req,res) => {
  const authorization = req.header("Authorization")
  if(!authorization) {
    return res.status(401).send('Unauthorized')
  }
  const token = req.header("Authorization").split(' ')[1]
  if(!token) {
    return res.status(401).send('Unauthorized')
  }
  const decoded = jwt.decode(token)
  if (!decoded){
    return res.status(401).send('Unauthorized')
  }
  return res.status(200).send(true)
})

app.use(cors({
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
}))

app.use(express.json())
app.use(express.raw())
app.use(Router)

app.use(function(req, res, next) {
  res.status(404).send('Not found')
});

app.set('port', 8000)

app.listen(8000, () => {
  console.log('listening on localhost:8000')
})