import express from "express";
const app = express();

app.use(express.static("public"));

app.get("/get-data", (req, res)=>{
    res.writeHead(200,{
        "Content-Type": "text/event-stream",
        "Cache-control": "no-cache",
        "Connection": "keep-alive"
    });

    setInterval(()=> sendData(res), 5000)
});

const sendData = (res)=>{
    const time = new Date().toTimeString();
    res.write(`data: "time": ${time}\n\n`)
}

const PORT = 8000
app.listen(PORT, ()=>{
    console.log("Server running on port:", PORT)
});