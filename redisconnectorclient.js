const Redis =require("redis");
//url is by default localhost on port 6379
const redisClient=Redis.createClient();

module.exports=redisClient;