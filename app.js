import express from 'express';
import {db} from './mongodb.js';
import { shevento } from './controllers/eventcontrollers.js';
import { showuser } from './controllers/userscontroller.js';

const router= express.Router();
const app = express();

app.use('/',router);

router.get('/eventos',shevento)

router.get('/usuarios',showuser)

router.get('/', (req,res) => {
    res.send("🚀😎 Deploy en Heroku🚀🚀")
})

var PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`Conectado en el servidor: http://localhost:${PORT}`)
})