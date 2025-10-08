'use client';

export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="md:flex md:gap-10">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-green-900 mb-3">About Usomi</h3>
                        <p className="text-gray-600">Usomi is building tools to help smallholder farmers access data, technology and markets. We build lightweight tools that work on low-bandwidth networks and are farmer-centred.</p>
                        <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
                            <li>Data-driven advisories</li>
                            <li>Market integrations</li>
                            <li>On-field support</li>
                        </ul>
                    </div>


                    <div className="md:w-1/2 mt-6 md:mt-0 grid grid-cols-2 gap-4">
                        <div className="rounded-lg overflow-hidden h-40 bg-green-50 flex items-center justify-center">Image</div>
                        <div className="rounded-lg overflow-hidden h-40 bg-green-50 flex items-center justify-center">Image</div>
                        <div className="rounded-lg overflow-hidden h-40 bg-green-50 flex items-center justify-center">Image</div>
                        <div className="rounded-lg overflow-hidden h-40 bg-green-50 flex items-center justify-center">Image</div>
                    </div>
                </div>
            </div>
        </section>
    );
}