import Express from "express";

const app = Express();

app.get("/", (req, res) => {
  res.send({ message: "Hello World!"});
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});