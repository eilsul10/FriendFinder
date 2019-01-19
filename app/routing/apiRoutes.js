// Referenced Week 13 - Activity 16
var friendsList = require("../data/friends");
var arraySort = require('array-sort');

// Routing
module.exports = function (app) {

    //API Get Request
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

// API POST Request
app.post("/api/friends", function (req, res) {
    var usersData = req.body;
    friendsList.push(req.body);
    res.json(friendsList[friendsList.length - 1]);

});

};

// var arraySort = require('array-sort');

// app.post("/api/friends", function (req, res) {

//     //current user input
//     var userCurrentdata = req.body;
//     var storeTotaldifference = [];
//     var results = 0;
//     for (var i = 0; i < soulmates.length; i++) {

//         for (var j = 0; j < soulmates[i].scores.length; j++) {
//             results += parseInt(userCurrentdata.scores[j]) - parseInt(soulmates[i].scores[j]);
//         }

//         storeTotaldifference.push({ name: soulmates[i].name, urlImage: soulmates[i].urlImage, totalDifference: Math.abs(results) });

//         arraySort(storeTotaldifference, 'totalDifference');

//         soulmates.push(userCurrentdata);

//         return res.json(storeTotaldifference[0]);

//     }

// });

