import redis from "redis";

const redisClient = redis.createClient();

await redisClient.connect();

redisClient.subscribe('theChannel', (value)=>{
    console.log("Value published in redis:", value)
});


