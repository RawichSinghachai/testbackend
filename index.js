const express = require("express");
const cors = require("cors");

require("dotenv").config();


const { MongoClient, ObjectId } = require("mongodb");

const client = new MongoClient(process.env.MONGODB);




const app = express();
const port = process.env.PORT || 4000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/',(req,res)=>{
    res.send('ok')
})


app.post('/update',async(req,res)=>{
    const {id,height,weight,datetocheck} = req.body
        const objectId = new ObjectId(id);
        await client.connect();
        const users = await client
          .db("nurse")
          .collection("users")
          .updateOne({_id:objectId},{$push:{height:height,weight:weight,datetocheck:datetocheck}})
        await client.close();
        res.json(users);
})