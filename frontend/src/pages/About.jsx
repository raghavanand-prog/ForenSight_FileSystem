function About() {
  return (
    <div className="max-w-6xl mx-auto py-16">

      <h1 className="text-5xl font-bold text-emerald-400 mb-10">
        About ForenSight
      </h1>

      <div className="border border-emerald-500 rounded-xl bg-slate-900 p-8">

        <p className="mb-6 text-lg leading-8">

          <span className="text-cyan-400 font-semibold">ForenSight</span> is a
          Digital Forensics System Inspector built using React, Express.js,
          Axios and Node.js Core Modules.

        </p>

        <h2 className="text-2xl text-cyan-400 mb-4">
          Technologies Used
        </h2>

        <ul className="space-y-2">

          <li>✔ React.js</li>

          <li>✔ Tailwind CSS</li>

          <li>✔ Express.js</li>

          <li>✔ Axios</li>

          <li>✔ HTTP Methods (GET, POST, PUT, DELETE)</li>

          <li>✔ Node.js File System Module</li>

          <li>✔ Path Module</li>

          <li>✔ OS Module</li>

        </ul>

      </div>

    </div>
  );
}

export default About;