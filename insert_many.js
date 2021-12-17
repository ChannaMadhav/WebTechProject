var MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017/"
MongoClient.connect(url,function(err,db){
    var dbo=db.db('mydb');
    var myobj=[{username:'prabhu_16502',password:'1234'},{username:'chaitanya',password:'1255'}];
    dbo.collection('register').insertMany(myobj,(err,res)=>{
        if(err) throw err;
        console.log("Inserted successfully");
        db.close();
    })
})