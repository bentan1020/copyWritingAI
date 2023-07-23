const express = require('express');
const app = express();

require('dotenv').config();

const openaiRoutes = require('./routes/openai-routes');

app.use("/product", openaiRoutes);

app.listen(8080, () => { console.log(`Server is listening on port 8080`) });