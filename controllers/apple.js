var Apple = require('../models/apple'); 
 
// List of all Apples 
exports.apple_list = async function(req, res) { 
    try{ 
        theApples = await Apple.find(); 
        res.send(theApples); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
}; 

// VIEWS
// Handle a show all view
exports.apple_view_all_Page = async function (req, res) {
    try {
        theApples = await Apple.find();
        res.render("apple", {
        title: "apple Search Results",
        results: theApples,
      });
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
  

 
// for a specific Apple. 
exports.apple_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple detail: ' + req.params.id); 
}; 
 

 
// Handle Apple delete form on DELETE. 
exports.apple_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple delete DELETE ' + req.params.id); 
}; 
 
// Handle Apple update form on PUT. 
exports.apple_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple update PUT' + req.params.id); 
}; 

// Handle Costume create on POST. 
exports.apple_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Apple(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"apple_type":"goat", "quantity":12, "cost":"large"} 
    document.apple_type = req.body.apple_type; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 