const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const reportsFolder = path.join(__dirname, "../reports");

function getReportPath() {

    if (!fs.existsSync(reportsFolder)) {
        fs.mkdirSync(reportsFolder);
    }

    const files = fs.readdirSync(reportsFolder);

    const report = files.find(file => file.endsWith(".txt"));

    if (!report) return null;

    return path.join(reportsFolder, report);

}

// ==========================
// LIST ALL FILES
// ==========================

router.get("/files", (req, res) => {

    fs.readdir(reportsFolder, (err, files) => {

        if (err) {

            return res.status(500).json({
                message: "Unable To Read Folder"
            });

        }

        res.json({
            files
        });

    });

});

// ==========================
// FILE INFORMATION
// ==========================

router.get("/file-info", (req, res) => {

    const reportPath = getReportPath();

    if (!reportPath) {

        return res.json({
            message: "No Report Found"
        });

    }

    fs.stat(reportPath, (err, stats) => {

        if (err) {

            return res.status(500).json({
                message: "Unable To Read File"
            });

        }

        res.json({

            fileName: path.basename(reportPath),

            directory: path.dirname(reportPath),

            extension: path.extname(reportPath),

            size: stats.size + " Bytes",

            created: stats.birthtime,

            modified: stats.mtime

        });

    });

});

// ==========================
// RENAME REPORT
// ==========================

router.put("/rename-report", (req, res) => {

    const reportPath = getReportPath();

    if (!reportPath) {

        return res.json({
            message: "No Report Found"
        });

    }

    const currentName = path.basename(reportPath);

    let newName;

    if (currentName === "evidence_report.txt") {

        newName = "case_report.txt";

    } else {

        newName = "evidence_report.txt";

    }

    const newPath = path.join(reportsFolder, newName);

    fs.rename(reportPath, newPath, (err) => {

        if (err) {

            return res.status(500).json({
                message: "Rename Failed"
            });

        }

        res.json({
            message: `Report Renamed to ${newName}`
        });

    });

});

module.exports = router;