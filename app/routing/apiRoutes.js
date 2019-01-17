// Referenced Week 13 - Activity 16
var friendsList= require("../data/friends");

// Routing
module.exports = function(app) {

    //API Get Request
    app.get("/api/friends", function(req,res){
        res.json(friendsList);
    });

    // API POST Request
    app.post("/api/friends", function(req, res) {
        var usersData=req.body;
        friendsList.push(req.body);
        res.json(friendsList[friendsList.length-1]);

        // Make sure Github folder move did not affect npm packages
        // INSERT COMPATIBILITY LOGIC
        // User 1 score
        // User 2 score
        // Total difference
        // Least amount of difference = match
    });

};