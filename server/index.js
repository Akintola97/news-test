const express = require('express');
const app = express();
require('dotenv').config();
// const hostname = "localhost";
// const port = 5000;
const port = process.env.PORT || 10000;
const cors = require('cors');
const path = require('path');


const route = require('./routes/routes')



app.use(cors({ credentials: true, origin: "https://news-app-2l4t.onrender.com"}));
app.use(express.json());



app.use('/headline', route);





app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, ()=>{
    console.log(`The server is running on ${port}`)
})
// app.listen(port, hostname,()=>{
//     console.log(`The server is running on ${hostname} ${port}`)
// })
