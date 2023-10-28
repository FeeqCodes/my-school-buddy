import { Press_Start_2P, Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";


const airStrikeBold = localFont({
  src: "./airstrikebold.ttf",
  variable: "--font-air"
});


const airStrikeLaser = localFont({
  src: "./airstrikelaser.ttf",
  variable: "--font-airLaser",
});

export {  airStrikeBold, airStrikeLaser };
