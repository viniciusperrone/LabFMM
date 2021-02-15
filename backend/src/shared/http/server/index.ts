import express, { Response, Request} from 'express';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';

import RouterAdm from '../routes/Admin';
import RouterUser from '../routes/User';

const app = express();

dotenv.load();

const port = process.env.NODE_ENV_APP_PORT_SERVER;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', RouterAdm);
app.use('/', RouterUser);

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`)
});

