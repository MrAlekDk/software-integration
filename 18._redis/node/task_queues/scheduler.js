import redis from "redis";
import Queue  from "bull";

const redisClient = redis.createClient();


const myQueue = new Queue('my-first-queue');

const people = [{"name": "Alexander"}, {"name": "Helena"}, {"name": "Kurt"}];

people.forEach(person =>{
    myQueue.add(person);
});

myQueue.on("completed", (job, result)=>{
    console.log("I just got words that all pending jobs were completed!");
    console.log(result);
})

