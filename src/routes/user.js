const express = require("express");
const router  = express.Router();
const validateController = require('./app/Controller/ValidateController')


// Show login page with get and login validate with post
router.get("/login", () => {
    console.log("login page!!!")
})
router.post("/login",validateController.validate());

module.exports=router;