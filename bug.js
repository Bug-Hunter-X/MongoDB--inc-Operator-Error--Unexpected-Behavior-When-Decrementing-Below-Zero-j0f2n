```javascript
// Incorrect use of $inc operator, leading to unexpected behavior
db.collection('myCollection').updateOne({"_id":ObjectId("6500e6698552581564123456")}, {"$inc":{"counter": -1}});
```