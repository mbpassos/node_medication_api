const express = require("express");
const mongoose = require('mongoose');
const apiRoutes = require("./routes/api.js")
const app = express()
const port = 8001

mongoose.connect('mongodb://root:root@localhost:27017/admin', {useNewUrlParser: true, useUnifiedTopology: true})

//diz ao express para ler json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})