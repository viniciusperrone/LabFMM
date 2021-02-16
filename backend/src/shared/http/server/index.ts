import express from 'express';

import bodyParser from 'body-parser';

import RouterGlobal from '../routes/global';
import RouterUser from '../routes/user';
import RouterAdm from '../routes/admin';

import { variables } from '../../../utils/environment';

const app = express();

// Talking data and converting them to json

app.use(bodyParser.json);

app.use(bodyParser.urlencoded( { extended: false } ));

// Talking all routes

app.use('/', RouterGlobal);
app.use('/', RouterUser);
app.use('/', RouterAdm);

// Starting server

app.listen(variables.port, () => {
  console.log('Server running on port ' + variables.port + '!')
})