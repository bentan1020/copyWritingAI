const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const openaiRoutes = require('./routes/openai-routes');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use("/product", openaiRoutes);

app.listen(8080, () => { console.log(`Server is listening on port 8080`) });