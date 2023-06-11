import redis from "redis";

const redisClient = redis.createClient();

await redisClient.connect();

redisClient.publish('theChannel','This was published by the publisher');
