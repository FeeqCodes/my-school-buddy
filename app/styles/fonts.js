import { Love_Ya_Like_A_Sister,Poppins } from "next/font/google";
import localFont from "next/font/local";



// Google Fonts
const loveYa = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-loveYa"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});




// Variable Fonts
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





export {  airStrikeBold, airStrikeLaser, loveYa, corleoneDue, poppins };
