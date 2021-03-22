import express from 'express';
import cors from 'cors';

import RouterGlobal from '../routes/global';
import RouterUser from '../routes/User';
import RouterAdm from '../routes/Admin';

import { variables } from '../../../utils/environment';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', RouterGlobal);
app.use('/', RouterUser);
app.use('/', RouterAdm);

// Starting server

app.listen(variables.port, () => {
  console.log('Server running on port ' + variables.port + '!')
})