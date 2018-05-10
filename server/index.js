import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

const staticFiles = express.static(path.join(__dirname, '../../client/build'));

app.use(bodyParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(staticFiles);

app.get('/', (req, res) => res.send('hello'));

app.use('/*', staticFiles)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));