import Link from "next/link";

export default function LeftSide() {
    return (
        <div className="flex-1 bg-gradient-to-b from-green-100 to-white flex flex-col justify-center px-10">
            <h1 className="text-6xl md:6xl font-extrabold text-green-800 leading-tight">
                Usomi
            </h1>
            <div className="w-12 h-1 bg-yellow-400 my-4"></div>

            <p className="text-lg max-w-md text-gray-700 leading-relaxed">
                <span className="text-2xl font-bold text-green-900">Empowering Farmers</span>
                {" "} with{" "}
                <span className="font-semibold text-yellow-500">data</span>,{" "}
                <span className="font-semibold text-yellow-500">technology</span>
                and{" "}
                <span className="font-semibold text-yellow-500">market access</span>.
                We transform agriculture into opportunity.
            </p>

            <Link
                href="#initiatives"
                className="inline-block mt-10 px-4 py-2 bg-yellow-400 text-green-900
             rounded-xl shadow hover:bg-yellow-500
             transition font-semibold"
            >
                Explore Our Initiatives
            </Link>

        </div>
    );
}


export function LeftSide1() {
    return (
        <div className="w-full bg-gradient-to-b from-green-100 to-white flex flex-col justify-center px-6 sm:px-10 py-16 lg:py-10 min-h-[60vh] lg:min-h-full">
            <h1 className="md:text-9xl text-6xl font-bold text-green-900 leading-tight">
                Usomi
            </h1>
            <div className="w-1/2 border-yellow-500 border-1 rounded-1xl"></div>

            <p className="text-base sm:text-lg max-w-md text-gray-700 leading-relaxed">
                <span className="text-xl sm:text-2xl font-bold text-green-900 block mb-2">
                    Empowering Farmers
                </span>
                with{" "}
                <span className="font-semibold text-yellow-500">data</span>,{" "}
                <span className="font-semibold text-yellow-500">technology</span>
                {" "}and{" "}
                <span className="font-semibold text-yellow-500">market access</span>.
                We transform agriculture into opportunity.
            </p>

            <Link
                href="#initiatives"
                className="inline-block mt-8 lg:mt-10 px-6 py-3 bg-yellow-400 text-green-900
                         rounded-xl shadow hover:bg-yellow-500 transition font-semibold
                         text-sm sm:text-base w-fit"
            >
                Explore Our Initiatives
            </Link>
        </div>
    );
}
