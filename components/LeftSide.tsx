export default function LeftSide() {
    return (
        <div className="flex-1 bg-gradient-to-b from-green-100 to-white flex flex-col justify-center px-10 relative z-10">
            <h1 className="text-6xl font-bold text-green-800">Usomi</h1>
            <div className="w-20 h-1 bg-yellow-400 my-4"></div>
            <p className="text-lg text-gray-700 max-w-md">
                Putting AgResearch into practice. Harnessing data, research, and
                technology to transform agriculture.
            </p>
            <a
                href="#initiatives"
                className="mt-4 px-7
                        bg-yellow-400 text-green-900 py-3
                        rounded-xl shadow hover:bg-yellow-500
                        transition"
            >
                Explore Our Initiatives
            </a>
        </div>
    )
}
