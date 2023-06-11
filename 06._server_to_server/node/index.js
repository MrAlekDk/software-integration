import express from "express"

const app = express();

const PORT = 3000

app.get("/greeting", (req, res)=>{
    const data = {"data": "Hello from the Node backend!"}
    res.send(data)
});

app.get("/getGreetingFromFastAPI", async (req, res)=>{
    const response = await fetch("http://127.0.0.1:8000/greeting");
    const greeting = await response.json()
    res.send(greeting);
})


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});