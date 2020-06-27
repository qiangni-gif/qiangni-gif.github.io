// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

// read the data file
function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

// update the data file, I use "name" to be equal to fruit, or animal or color
// to match with the file names
// I assume we always just add 1 to a single item
function combineCounts(name, value){
    // console.log(value);
    info = readData(name);
     // will be useful for text entry, since the item typed in might not be in the list
    var found = 0;

    if (name === "name"){
        for (var i=0; i<info.length; i++){
            if ((info[i][name][0] === value[0])&&(info[i][name][1] === value[1])&&(info[i][name][2] === value[2])){
                info[i].count = parseInt(info[i].count) + 1;
                found = 1;
            }
        }
    }
    else{
        for (var i=0; i<info.length; i++){
            if (info[i][name] === value){
                info[i].count = parseInt(info[i].count) + 1;
                found = 1;
            }
        }
    }
    
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
}

// This is the controler per se, with the get/post
module.exports = function(app){

    // when a user goes to localhost:3000/analysis
    // serve a template (ejs file) which will include the data from the data files
    app.get('/analysis', function(req, res){
        var aboutUI = readData("aboutUI");
        var comment = readData("comment");
        var feel = readData("feel");
        var goal = readData("goal");
        var range = readData("range");
        var yes_no = readData("yes_no");
        var name = readData("name");
        res.render('showResults', {results: [aboutUI,feel,comment,yes_no,goal,range,name]});
        console.log([aboutUI,feel,comment,yes_no,goal,range,name]);
    });

    // when a user goes to localhost:3000/niceSurvey
    // serve a static html (the survey itself to fill in)

    app.get('/style', function(req,res){
        res.sendFile(__dirname+"/views/seg3125lab1/style.css");
    });

    app.get('/food', function(req,res){
        res.sendFile(__dirname+"/views/seg3125lab1/food.JPG");
    });

    app.get('/food_background', function(req,res){
        res.sendFile(__dirname+"/views/seg3125lab1/food_background.jpg");
    });

    app.get('/whatsfreash', function(req,res){
        res.sendFile(__dirname+"/views/seg3125lab1/whatsfreash.JPG");
    });

    app.get('/layer', function(req,res){
        res.sendFile(__dirname+"/views/seg3125lab1/layer.jpg");
    });
    
    app.get('/index', function(req, res){
        res.sendFile(__dirname+'/views/seg3125lab1/index.html');
    });

    

    // when a user types SUBMIT in localhost:3000/niceSurvey 
    // the action.js code will POST, and what is sent in the POST
    // will be recuperated here, parsed and used to update the data files
    app.post('/index', urlencodedParser, function(req, res){
        console.log(req.body);
        var json = req.body;
        var name = new Array(3);
        for (var key in json){
            console.log(key + ": " + json[key]);
            // in the case of checkboxes, the user might check more than one
            if ((key === "goal") && (json[key].length > 1)){
                for (var item in json[key]){
                    combineCounts(key, json[key][item]);
                }
            }
            else if ((key === "firstname")||(key === "lastname")||(key === "email")){
                switch(key){
                    case "firstname":
                        name[0] = json[key]
                        break;
                    case "lastname":
                        name[1] = json[key]
                        break;
                    case "email":
                        name[2] = json[key]
                        break;
                }
                if ((name[0] != null)&&(name[1] != null)&&(name[2] != null)){
                    combineCounts("name", name);
                }
            }
            else if (key === "range"){
                switch(json[key]){
                    case"0":
                        console.log("zero")
                        combineCounts("range", "zero star");
                        break;
                    case"1":
                        combineCounts("range", "one star");
                        break;
                    case"2":
                        combineCounts("range", "two star");
                        break;
                    case"3":
                        combineCounts("range", "three star");
                        break;
                    case"4":
                        combineCounts("range", "four star");
                        break;
                    case"5":
                        combineCounts("range", "five star");
                        break;
                }
            }
            else {
                combineCounts(key, json[key]);
            }
        }
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        res.sendFile(__dirname + "/views/seg3125lab1/index.html");
    });
    

};