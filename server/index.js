const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 10000;
const bodyParser = require('body-parser')
const path = require('path');


const hero_page = require('./routes/Hero')
const business_route = require('./routes/Business')
const science_route = require('./routes/Science')
const sports_route = require('./routes/Sports')
const search_route = require('./routes/Search')


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use('/hero', hero_page);
app.use('/business', business_route);
app.use('/science', science_route);
app.use('/sports', sports_route);
app.use('/search', search_route);




app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, ()=>{
    console.log(`The server is running on ${port}`)
})