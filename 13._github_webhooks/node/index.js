import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//remember to use ngrok and update the URL for the webhook on github.com
app.post("/githubWebhook", (req, res)=>{
    console.log(req.body);
    res.send({});
})

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
});