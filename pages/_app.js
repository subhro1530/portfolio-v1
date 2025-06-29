import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Orbitron, Rajdhani } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['500', '700'] });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['300', '400'] });

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.className} bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen`}
    >
      <Component {...pageProps} />
    </main>
  );
}
