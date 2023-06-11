import redis from "redis";

const redisClient = redis.createClient();

redisClient.on("error", (error)=>{
    console.error("Error:", error);
});

redisClient.on("connect", ()=>{
    console.log("Client connected to Redis");
});

await redisClient.connect();

//create person object and stringify to save in redis
const person = {"name": {"name": "Alexander", "age": 24}};
redisClient.set("person",JSON.stringify(person));

// get value from redis server and JSON parse back to JS-object
const value = await redisClient.get("person");
const personFetched = JSON.parse(value);

console.log(personFetched);