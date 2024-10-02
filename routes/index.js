var express = require('express');
var router = express.Router();
const path = require("path");
const readUsers = require('../middleware/readusers');
const updateUsers = require('../middleware/updateUsers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.resolve("./views/signin.ejs"), {title : "Sign In"});
});

router.post("/", [readUsers, updateUsers], (req,res)=>{
  res.redirect("/login")
})

module.exports = router;
