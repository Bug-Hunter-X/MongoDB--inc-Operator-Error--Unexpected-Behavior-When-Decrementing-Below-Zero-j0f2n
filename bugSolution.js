```javascript
// Correct use of $inc operator with handling for decrementing below zero
db.collection('myCollection').updateOne({"_id":ObjectId("6500e6698552581564123456")}, {"$inc":{"counter": -1}}, {upsert: true});
//Alternative using $min
db.collection('myCollection').updateOne({"_id":ObjectId("6500e6698552581564123456")}, {"$min":{"counter": 0}});
```