console.log("RUNNING THIS FILE:", __filename);
const express = require("express");
const cors = require("cors");

const systemRoutes = require("./routes/systemRoutes");
const reportRoutes = require("./routes/reportRoutes");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        project: "ForenSight",
        status: "Running",
        backend: "Express Server"
    });
});

app.use(systemRoutes);
app.use(reportRoutes);
app.use(fileRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});