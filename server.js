var express = require("express");
var app = require("express")();
var http = require("http").Server(app);
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");
var mongodb = require("mongodb");
var dataBase;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(__dirname + "/images"));

app.use(express.static(__dirname + "/aframefiles"));
app.use(express.static(__dirname + "/3dmodels"));
// app.use(express.static(__dirname + "/toon_dinosaur_creature_3"));
app.use(express.static(__dirname + "/jsfiles"));
app.use(express.static(__dirname + "/patterns"));
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/phpfiles"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", function(req, res) {
  var newContact = req.body.name;
  console.log(newContact);
  console.log(dataBase);
  dataBase
    .collection("customers")
    .findOne({ email: newContact }, function(err, doc) {
      if (err) {
        console.log("ERROR: " + reason);
        res.status(code || 500).json({ error: message });
      } else {
       res.send("success");
      }
    });
});
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://praveen:chintu123@ds161210.mlab.com:61210/shopping";

MongoClient.connect(
  url,
  function(err, db) {
    if (err) throw err;

    dataBase = db;
  }
);

app.post("/registeruser", function(req, res) {
  var newContact = req.body;
  console.log(newContact);
  console.log(dataBase);
  dataBase.collection("customers").insertOne(newContact, function(err, doc) {
    if (err) {
      console.log("ERROR: " + reason);
      res.status(code || 500).json({ error: message });
    } else {
      res.status(201).json(doc.ops[0]);
      res.send("success");
    }
  });
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
