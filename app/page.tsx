// app/page.tsx
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold">
			Usomi - Empowering famers
        </h1>
        <p className="max-w-xl text-black">
          Empowering farmers with data, research and technology to transform agriculture.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl">
          Learn More
        </button>

        {/* small placeholder image */}
        <div className="mt-8">
          <Image
            src="/aggregation-center.jpg"
            alt="Agriculture Image"
            width={800}
            height={350}
            className="rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">About Us</h2>
        <p className="max-w-2xl text-gray-600">
          Usomi aims to bridge the gap between agricultural research and everyday
          farming practice. We design data-driven solutions that improve the
          livelihoods of farmers across the region.
        </p>
      </section>

      {/* Initiatives Section */}

      <section id="our-work">
        <h2 className="text-3xl font-semibold mb-8">Our Initiatives</h2>
        <div className="grid md:grid-cols-3 gap-6">

          {/* Rubi */}
          <div className="border p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">UsomiRubi</h3>
            <Image
              src="/data-collection_1.jpg"
              alt="UsomiRubi"
              width={300}
              height={200}
              className="rounded-lg object-cover mb-3"
            />
            <p className="text-gray-600 text-sm">
              Making markets work for farmers.
            </p>
          </div>

          {/* Lulu */}
          <div className="border p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">UsomiLulu</h3>
            <Image
              src="/kuku-nyumbani.jpg"
              alt="UsomiLulu"
              width={300}
              height={200}
              className="rounded-lg object-cover mb-3"
            />
            <p className="text-gray-600 text-sm">
              Making data work for farmers.
            </p>
          </div>

          {/* Genomics */}
          <div className="border p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">UsomiGenomics</h3>
            <Image
              src="/aggregation-center.jpg"
              alt="UsomiGenomics"
              width={300}
              height={200}
              className="rounded-lg object-cover mb-3"
            />
            <p className="text-gray-600 text-sm">
              Making genetics work for farmers.
            </p>
          </div>

        </div>
      </section>

      {/* Contact placeholder */}
      <section id="contact">
        <h2 className="text-3xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-600 max-w-md">
          You can reach us via email at info@usomi.com or visit our offices to learn more.
        </p>
      </section>
    </div>
  );
}
