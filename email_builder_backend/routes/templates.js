const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const path = require("path")
const fs = require("fs")

router.get("/getEmailLayout", (req, res) => {
   const filePath = path.join(__dirname, "../templates/layout.html");

   fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
         console.error(err);
         return res.status(500).send("Error reading the file");
      }
      res.json({data});
   });
});

module.exports = router