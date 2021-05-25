const redis = require('async-redis');
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const redisClient = redis.createClient(REDIS_PORT, REDIS_HOST);

redisClient.on('error', (error) => {
  console.error('REDIS_CLIENT_ERROR: ', error);
});

const getRedis = async (key) => {
  try {
    const response = await redisClient.get(key);
    return JSON.parse(response);
  } catch (error) {
    throw error;
  }
};

const setRedis = async (key, data, ttl) => {
  try {
    const json = JSON.stringify(data);
    const response = await redisClient.set(key, json);
    redisClient.expire(key, ttl || 86400);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = { redisClient, getRedis, setRedis };