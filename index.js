const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())


var products = [{
   id:1,
   name:"Banana",
   paice:200,

}];

app.get('/products', (req, res) => {
    res.json(products)
 

});
app.post('/products', (req, res) => {
    var json=req.body
    products.push(json)
    res.json(products)
     

 });
 app.put('/products/:id', (req, res) => {
    const updateIndex = products.findIndex(product => product.id === Number(req.params.id))
    products[updateIndex].name = req.body.name
    products[updateIndex].paice= req.body.paice
    res.json(req.body)
  });
app.delete('/products/:id', (req, res) => {
    const deletedIndex = products.findIndex(product => product.id === Number(req.params.id))
    products.splice(deletedIndex, 1)
    res.json(products)
    
});



app.listen(3000, () => console.log('sever runing'));

