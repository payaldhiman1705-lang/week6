require("dotenv").config();
const express =require("express");
const mongoose =require("mongoose");

const app =express();
const path =require("path");
app.use(express.static(path.join(__dirname,"../frontend")));

app.use(express.json());

app.use("/api", require("./routes/auth"));

// moogodb setup
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDb Connected!"))
.catch((err)=> console.log("DB error:", err.message));

app.get("/", (req, res)=>{
    res.send("Server chal raha hai!");
});

const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server running on port" + PORT);
});
