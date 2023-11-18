import { Love_Ya_Like_A_Sister } from "next/font/google";
import localFont from "next/font/local";




const loveYa = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-loveYa"
});



const airStrikeBold = localFont({
  src: "./airstrikebold.ttf",
  variable: "--font-air"
});


const airStrikeLaser = localFont({
  src: "./airstrikelaser.ttf",
  variable: "--font-airLaser",
});



const corleoneDue = localFont({
  src: "./CorleoneDue.ttf",
  variable: "--font-corleone",
});





export {  airStrikeBold, airStrikeLaser, loveYa, corleoneDue };
