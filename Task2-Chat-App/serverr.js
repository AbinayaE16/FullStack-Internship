const express = require("express");
const app = express();

app.use(express.static("task1-api-webpage"));

app.listen(4000, () => {
    console.log("Task 1 running on port 4000");
});


