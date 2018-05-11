import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

const staticFiles = express.static(path.join(__dirname, '../../client/build'));

app.use(staticFiles);

router.get('/ping', (req, res) => res.send('Pong'));

app.use(router);

app.use('/*', staticFiles);

app.all('*', (req, res) => res.redirect('/'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
