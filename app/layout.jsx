import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(layout-design)/Navbar";
import Footer from "./(layout-design)/Footer";
import BackgroundMesh from "./(layout-design)/BackgroundMesh";

// Fonts
import {
  airStrikeBold,
  airStrikeLaser,
  corleoneDue,
  loveYa,
  poppins,
} from "./styles/fonts";
import { Web3Modal } from "../context/web3Modal";



export const metadata = {
  title: "School-Buddy",
  description: "Generated by create next app",
  icons: {
    icon: "/public/assets/Home Vector.svg",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${loveYa.variable} ${corleoneDue.variable}, ${poppins.variable} `}
      >
        <Web3Modal>
          <main className="text-white  max-w-[1400px] w-[95vw] m-auto ">
            <BackgroundMesh />

            <Navbar />

            {children}
            <Footer />
          </main>
        </Web3Modal>
      </body>
    </html>
  );
}
