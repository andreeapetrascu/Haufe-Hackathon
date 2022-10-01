const express = require('express')
const axios = require("axios");
const {response} = require("express");
const app = express()
const port = 3001
var cors = require('cors')

app.use(cors())

app.get('/', async (req, res) => {

    const data = await axios.get('https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab')

    console.log(data);
    return data;
    //res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

