const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("its actually running!"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servevr started on port ${PORT}`));