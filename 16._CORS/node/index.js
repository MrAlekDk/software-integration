import express from "express";
const app = express();

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/greeting", (req, res)=>{
    res.send({data: "hello from express backend!"})
});

app.listen(8000, () => console.log("Server is running on", 8000));