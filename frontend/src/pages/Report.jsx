import { useState } from "react";
import api from "../api/axios";

function Report() {

    const [report, setReport] = useState("");

    const [reportText, setReportText] = useState("");

    const [status, setStatus] = useState("No Action Performed");

    const [method, setMethod] = useState("-");

    const readReport = async () => {

        try {

            const res = await api.get("/report");

            setReport(res.data.report || res.data.message);

            setStatus("Report Loaded");

            setMethod("GET");

        }

        catch {

            setStatus("Error Reading Report");

        }

    };

    const createReport = async () => {

        try {

            const res = await api.post("/report", {

                report: reportText

            });

            setStatus(res.data.message);

            setMethod("POST");

            setReportText("");

            await readReport();

        }

        catch {

            setStatus("Error Creating Report");

        }

    };

    const updateReport = async () => {

        try {

            const res = await api.put("/report", {

                report: reportText

            });

            setStatus(res.data.message);

            setMethod("PUT");

            setReportText("");

            await readReport();

        }

        catch {

            setStatus("Error Updating Report");

        }

    };

    const deleteReport = async () => {

        try {

            const res = await api.delete("/report");

            setReport("Report Deleted Successfully.");

            setReportText("");

            setStatus(res.data.message);

            setMethod("DELETE");

        }

        catch {

            setStatus("Error Deleting Report");

        }

    };

    return (

        <div className="max-w-6xl mx-auto py-16">

            <h1 className="text-5xl font-bold text-emerald-400 mb-10">

                Evidence Report

            </h1>

            <textarea

                rows="10"

                value={reportText}

                onChange={(e) => setReportText(e.target.value)}

                placeholder="Enter investigation report or additional evidence..."

                className="w-full bg-slate-900 border border-emerald-500 rounded-xl p-5 mb-6 outline-none text-white"

            />

            <div className="flex flex-wrap gap-4 mb-8">

                <button

                    onClick={createReport}

                    className="border border-emerald-500 rounded-full px-5 py-2 hover:bg-emerald-500 hover:text-black transition"

                >

                    📝 Create Report

                </button>

                <button

                    onClick={readReport}

                    className="border border-cyan-500 rounded-full px-5 py-2 hover:bg-cyan-500 hover:text-black transition"

                >

                    📖 Read Report

                </button>

                <button

                    onClick={updateReport}

                    className="border border-yellow-500 rounded-full px-5 py-2 hover:bg-yellow-500 hover:text-black transition"

                >

                    ➕ Append Evidence

                </button>

                <button

                    onClick={deleteReport}

                    className="border border-red-500 rounded-full px-5 py-2 hover:bg-red-500 hover:text-black transition"

                >

                    🗑 Delete Report

                </button>

            </div>

            <div className="border border-emerald-500 rounded-xl bg-slate-900 p-6 mb-8">

                <p>

                    <span className="text-cyan-400">

                        HTTP Method :

                    </span>{" "}

                    {method}

                </p>

                <p className="mt-2">

                    <span className="text-cyan-400">

                        Status :

                    </span>{" "}

                    {status}

                </p>

            </div>

            <div className="border border-emerald-500 rounded-xl bg-slate-900 p-6 whitespace-pre-wrap min-h-[250px]">

                {report || "No Report Loaded"}

            </div>

        </div>

    );

}

export default Report;