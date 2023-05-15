const express = require("express");
const cors = require("cors");
const fs = require("fs");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: "http:localhost/3000",
  })
);
app.use(morgan("dev"));
app.use(express.json());
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
