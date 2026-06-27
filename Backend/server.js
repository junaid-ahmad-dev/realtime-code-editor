import express from "express"
import { createUser } from "http"
import { Server } from "socket.io"
import cors from "y-socket.io/dist/"

const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hello World!");
});

app.listen(3000,()=> {
    console.log("Server is running on port 3000");
});