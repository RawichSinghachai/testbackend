const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('This is http get')
})

app.post('/test', (req, res) => {
  const {name,id} = req.body
  console.log(`name : ${name}`);
  console.log(`id : ${id}`);
//   console.log(req.body);
  res.send('Received the data successfully.');
});

app.listen(3001, () => console.log('Running on port 3001'))