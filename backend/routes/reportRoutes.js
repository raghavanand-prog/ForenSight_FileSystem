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
// GET REPORT
// ==========================

router.get("/report", (req, res) => {

    const reportPath = getReportPath();

    if (!reportPath) {

        return res.json({
            message: "No Report Found"
        });

    }

    fs.readFile(reportPath, "utf8", (err, data) => {

        if (err) {

            return res.status(500).json({
                message: "Unable to Read Report"
            });

        }

        res.json({
            report: data
        });

    });

});

// ==========================
// CREATE REPORT
// ==========================

router.post("/report", (req, res) => {

    if (!fs.existsSync(reportsFolder)) {
        fs.mkdirSync(reportsFolder);
    }

    const reportPath = path.join(
        reportsFolder,
        "evidence_report.txt"
    );

    const report = req.body.report || "No Report Entered";

    fs.writeFile(reportPath, report, (err) => {

        if (err) {

            return res.status(500).json({
                message: "Unable to Create Report"
            });

        }

        res.json({
            message: "Report Created Successfully"
        });

    });

});

// ==========================
// APPEND EVIDENCE
// ==========================

router.put("/report", (req, res) => {

    const reportPath = getReportPath();

    if (!reportPath) {

        return res.json({
            message: "No Report Found"
        });

    }

    const update = "\n\n" + (req.body.report || "");

    fs.appendFile(reportPath, update, (err) => {

        if (err) {

            return res.status(500).json({
                message: "Unable to Update Report"
            });

        }

        res.json({
            message: "Evidence Added Successfully"
        });

    });

});

// ==========================
// DELETE REPORT
// ==========================

router.delete("/report", (req, res) => {

    const reportPath = getReportPath();

    if (!reportPath) {

        return res.json({
            message: "No Report Found"
        });

    }

    fs.unlink(reportPath, (err) => {

        if (err) {

            return res.status(500).json({
                message: "Unable to Delete Report"
            });

        }

        res.json({
            message: "Report Deleted Successfully"
        });

    });

});

module.exports = router;