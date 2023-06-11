import redis from "redis";
import Queue  from "bull";

const redisClient = redis.createClient();


const myQueue = new Queue('my-first-queue');


myQueue.process((job)=>{
    console.log(`This is the worker, hello ${job.data.name}!`);
    return Promise.resolve("We're done");
})

