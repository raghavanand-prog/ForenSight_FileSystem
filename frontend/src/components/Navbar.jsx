import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-emerald-500/30">

      <div className="max-w-7xl mx-auto px-6 py-3">

        {/* Terminal Header */}
        <div className="flex items-center justify-between border border-emerald-500/30 rounded-t-xl bg-slate-900 px-4 py-2">

          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <span className="text-xs text-gray-400">
            FORENSIGHT TERMINAL
          </span>

          <div></div>

        </div>

        {/* Main Navbar */}
        <div className="border-x border-b border-emerald-500/30 rounded-b-xl bg-slate-950 px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>

            <Link to="/">
              <h1 className="text-3xl font-bold text-emerald-400 hover:text-cyan-400 transition">
                {">_"} FORENSIGHT
              </h1>
            </Link>

            <p className="text-cyan-400 text-sm mt-1">
              Digital Forensics System Inspector
            </p>

            <div className="mt-3 inline-flex items-center gap-2 border border-emerald-500 rounded-full px-3 py-1 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              API ONLINE
            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            <Link
              to="/"
              className="border border-emerald-500 rounded-full px-5 py-2 hover:bg-emerald-500 hover:text-black transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/system"
              className="border border-emerald-500 rounded-full px-5 py-2 hover:bg-emerald-500 hover:text-black transition duration-300"
            >
              System Scan
            </Link>

            <Link
              to="/report"
              className="border border-emerald-500 rounded-full px-5 py-2 hover:bg-emerald-500 hover:text-black transition duration-300"
            >
              Evidence
            </Link>

            <Link
              to="/file"
              className="border border-emerald-500 rounded-full px-5 py-2 hover:bg-emerald-500 hover:text-black transition duration-300"
            >
              File Inspector
            </Link>

            <Link
              to="/about"
              className="border border-emerald-500 rounded-full px-5 py-2 hover:bg-emerald-500 hover:text-black transition duration-300"
            >
              About
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;