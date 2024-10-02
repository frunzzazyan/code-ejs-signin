const fs = require("fs")
function updateUsers(req,res,next){
    const newObj = {
            id: Math.round(Math.random()*1000),
            fname: req.body.fname.trim()[0].toUpperCase() + req.body.fname.trim().slice(1).toLowerCase(),
            lname: req.body.lname.trim()[0].toUpperCase() + req.body.lname.trim().slice(1).toLowerCase(),
            email: req.body.email.trim(),
            age: req.body.age,
            password: req.body.password.trim() 
        }
    fs.promises.writeFile("./db/users.json", JSON.stringify(newObj))
    next()
}

module.exports = updateUsers