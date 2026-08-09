const express = require("express");
const os = require("os");

const router = express.Router();

router.get("/system", (req, res) => {

    res.json({

        hostname: os.hostname(),

        platform: os.platform(),

        architecture: os.arch(),

        cpuCores: os.cpus().length,

        totalMemory:
            (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB",

        freeMemory:
            (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",

        uptime:
            Math.floor(os.uptime() / 3600) + " Hours"

    });

});

module.exports = router;