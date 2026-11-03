const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Student API is working");
});

app.get("/student", (req, res) => {
    res.json({
        name: "Naveen",
        course: "BCA"
    });
});

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");
});