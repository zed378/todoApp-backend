const express = require("express");
const cors = require("cors");
const router = require("./src/routes/");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.debug(`Server running on port: ${port}`));
