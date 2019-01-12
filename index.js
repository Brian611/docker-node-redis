const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const port = 3000;
const client = redis.createClient({
    host: "redis-server"
});
client.set("visits", 0);

app.get("/", (req, res) => {
    process.exit(1);
    client.get("visits", (error, visits) => {
        if (error) console.error(error);
        res.send("Number of visits " + visits);
        client.set("visits", parseInt(visits) + 1);
    })
});

app.listen(port, () => {
    console.log("Listening on port : ", port);
});