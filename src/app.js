const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req,res) => {res.send('hello from raghav!'); })

app.listen(port, ()=>{console.log(`connection is live at port no. ${port}`)});