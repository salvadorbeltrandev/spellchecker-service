const express = require("express");
const apiRoutes = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/api", apiRoutes);

const port = 31337;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
