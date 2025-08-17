// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Usomi",
//   description: "Usomi Limited",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


// new boxed layout
// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

export const metadata = {
  title: "Usomi",
  description: "Putting AgResearch into practice",
};

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} bg-white text-gray-900`}>
        <header className="border-b-1 text-green-usomi">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-1 py-1">
            <Link href="/" className="text-2xl font-bold text-blue-usomi">
              Usomi
              <p className={`italic text-xs font-large text-blue-usomi`}>Putting AgResearch into practice</p>
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#our-work" className="hover:text-black">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-black">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-10">{children}</main>

        <footer className="border-t mt-10">
          <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Usomi — All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
