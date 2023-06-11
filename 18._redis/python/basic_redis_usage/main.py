import redis

redis_client = redis.Redis(host="localhost", port=6379, db=0)

person = {"name": "Alexander", "age": 24}

redis_client.set("person", repr(person))
redis_client.set("aKey", "just a random key")

person_from_redis = redis_client.get("person")

print(eval(person_from_redis))
keys = redis_client.keys('*')
print(redis_client.mget(keys))