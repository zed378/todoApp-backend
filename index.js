const express = require("express");
const cors = require("cors");
const router = require("./src/routes/");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1.0/", router);

// test if deploy success
app.get("/", (req, res) => res.send("Endpoint Todo App"));

const port = 5000;

app.listen(port, () => console.debug(`Server running on port: ${port}`));
