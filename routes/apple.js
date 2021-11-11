// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("apple", { title: "Search Results Apple" });
// });

// module.exports = router;


var express = require("express");
const apple_controlers = require("../controllers/apple");
var router = express.Router();

/* GET restaurants */
router.get("/", apple_controlers.apple_view_all_Page);
module.exports = router;