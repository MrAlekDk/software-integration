import express from "express";
import path from "path";
import client from "./smsHandler.js";
import { fileURLToPath } from "url";
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended:true}));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post("/send-sms", (req, res)=>{
    console.log(req.body)
    const {phoneNr, message} = req.body
   
    client.messages
  .create({ body: message, from: "+13613384559", to: phoneNr })
    .then(message => console.log(message.sid));
    return res.status(200).send("Success");
})


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
