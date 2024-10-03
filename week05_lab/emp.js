const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello world from EMPLOYEE")
})

//Get query string 
router.get("/employees", (req, res) => {
    res.send("Get all Employess");
})

router.get("/employees/;id", (req, res) => {
    res.send(`Get all Employess by ID: ${req.params.id}`);
})

//Get body data
router.post("/employees", (req, res) =>{
    const emp = req.body;
    res.send(emp);
});

router.put("/employees/;id", (req, res) => {
    res.send(`Update Employess by ID: ${req.params.id}`);
})

router.delete("/employees/;id", (req, res) => {
    res.send(`Delete Employess by ID: ${req.params.id}`);
})

module.exports = router;