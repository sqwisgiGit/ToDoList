import Redis from 'ioredis';

const redisUrl = 'redis://localhost:6379';

const redis = new Redis(redisUrl);


export default redis;