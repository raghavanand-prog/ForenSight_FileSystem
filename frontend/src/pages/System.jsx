import { useEffect, useState } from "react";
import api from "../api/axios";

function System() {

    const [system, setSystem] = useState(null);

    useEffect(() => {

        api.get("/system")
            .then((res) => {

                setSystem(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    if (!system) {

        return (

            <h1 className="text-white text-center mt-20 text-3xl">

                Loading...

            </h1>

        );

    }

    return (

        <div className="max-w-6xl mx-auto py-20">

            <h1 className="text-5xl font-bold text-emerald-400 mb-10">

                System Scan

            </h1>

            <div className="grid md:grid-cols-2 gap-6">

                <Card title="Hostname" value={system.hostname} />

                <Card title="Platform" value={system.platform} />

                <Card title="Architecture" value={system.architecture} />

                <Card title="CPU Cores" value={system.cpuCores} />

                <Card title="Total Memory" value={system.totalMemory} />

                <Card title="Free Memory" value={system.freeMemory} />

                <Card title="System Uptime" value={system.uptime} />

            </div>

        </div>

    );

}

function Card({ title, value }) {

    return (

        <div className="border border-emerald-500 rounded-xl p-5 bg-slate-900">

            <h2 className="text-cyan-400 mb-2">

                {title}

            </h2>

            <p className="text-xl font-semibold">

                {value}


            </p>

        </div>

    );

}

export default System;