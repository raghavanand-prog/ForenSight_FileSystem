import { useEffect, useState } from "react";
import api from "../api/axios";

function FileInfo() {

    const [info, setInfo] = useState(null);
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState("");

    const loadInfo = async () => {

        try {

            const res = await api.get("/file-info");

            setInfo(res.data);

        } catch {

            setStatus("Unable to Load File Information");

        }

    };

    const loadFiles = async () => {

        try {

            const res = await api.get("/files");

            setFiles(res.data.files || []);

        } catch {

            setStatus("Unable to Read Folder");

        }

    };

    const renameFile = async () => {

        try {

            const res = await api.put("/rename-report");

            setStatus(res.data.message);

            loadInfo();

            loadFiles();

        } catch {

            setStatus("Rename Failed");

        }

    };

    useEffect(() => {

        loadInfo();

        loadFiles();

    }, []);

    return (

        <div className="max-w-6xl mx-auto py-16">

            <h1 className="text-5xl font-bold text-emerald-400 mb-10">

                File Inspector

            </h1>

            <button
                onClick={renameFile}
                className="border border-emerald-500 px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-black mb-8"
            >
                Rename Report
            </button>

            <p className="mb-8 text-cyan-400">

                {status}

            </p>

            {info && (

                <div className="grid md:grid-cols-2 gap-6 mb-10">

                    <Card title="File Name" value={info.fileName} />

                    <Card title="Extension" value={info.extension} />

                    <Card title="Directory" value={info.directory} />

                    <Card title="Size" value={info.size} />

                    <Card title="Created" value={info.created} />

                    <Card title="Modified" value={info.modified} />

                </div>

            )}

            <div className="border border-emerald-500 rounded-xl p-6 bg-slate-900">

                <h2 className="text-2xl mb-4 text-cyan-400">

                    Reports Folder

                </h2>

                {

                    files.map((file, index) => (

                        <p key={index}>

                            📄 {file}

                        </p>

                    ))

                }

            </div>

        </div>

    );

}

function Card({ title, value }) {

    return (

        <div className="border border-emerald-500 rounded-xl p-5 bg-slate-900">

            <h3 className="text-cyan-400 mb-2">

                {title}

            </h3>

            <p>

                {String(value)}

            </p>

        </div>

    );

}

export default FileInfo;