const express = require('express')

const app = express()
const mysql = require('mysql')
var connection = mysql.createConnection({
    host:"172.18.4.213",
    user:"root",
    password:"root",
    database:"hr",
    port:9099
})
connection.connect();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   res.header("Access-Control-Allow-Methods", "get,post,delete,put");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.json())

app.get('/product',(request,response) =>{
    var queryText = "select * from product"

    connection.query(queryText,(error,data) =>
    {
        if(error==null)
        {
            response.send(data)
        }else{
        response.send(error)
        }
    })
})

app.get('/category',(request,response) =>{
    var queryText = "select * from category"

    connection.query(queryText,(error,data) =>
    {
        if(error==null)
        {
            response.send(data)
        }else{
        response.send(error)
        }
    })
})
app.get('/user',(request,response) =>{
    var queryText = "select * from user"

    connection.query(queryText,(error,data) =>
    {
        if(error==null)
        {
            response.send(data)
        }else{
        response.send(error)
        }
    })
})

app.get('/', (request, response) => {
    response.send('welcome')
})

app.listen(6666, '0.0.0.0', () => {
    console.log('server started  on port 6666')
})
