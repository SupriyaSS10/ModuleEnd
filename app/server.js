const express = require("express");
const app = express();
app.get('/', (req, resp) => {
    resp.sendFile("htmlPage/home.html", { root: __dirname });
});
app.listen(8000, () => {
    console.log("server is running at port 8000");
});
