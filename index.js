/*
mongodb+srv://benjaminramovic02:<db_password>@advertmanager.ad69u.mongodb.net/?retryWrites=true&w=majority&appName=AdvertManager
*/

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const http = require("http")
const oglasRoute = require("./routes/oglas.route.js")

const app = express()
app.use(cors())
app.use(express.json())

const server = http.createServer(app)

mongoose.connect("mongodb+srv://benjaminramovic02:X20znAHZhT1O1cVD@advertmanager.ad69u.mongodb.net/?retryWrites=true&w=majority&appName=AdvertManager")
.then(()=>{
    console.log("Connected to AdvertManager database!");
    server.listen(5000, () => {
        console.log("Server is running on port 5000.");
    });
});

app.use("/api/oglasi",oglasRoute)
app.use("/", async (req,res) =>{
res.json("Hello")
})