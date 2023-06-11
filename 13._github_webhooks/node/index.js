import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/githubWebhook", (req, res)=>{
    console.log(req.body)
    const payload = JSON.parse(req.body.payload);
    console.log(payload.action);
    res.send({});
})

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
});