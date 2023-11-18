import React from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import TwoColumnLayout from "./components/TwoColumnLayout";
import Button from "./components/Button";
import Image from "next/image";

function Home() {
  return (
    <>
      <TwoColumnLayout
        leftChildren={
          <>
            <Sidebar />
            <Hero
              title="MY SCHOOL BUDDY"
              paragraph="Embark on a transformative academic journey with our decentralized AI platform, crafted exclusively for students. Revolutionize your learning experience as cutting-edge AI tools converge in a decentralized space, putting knowledge at your fingertips. Explore the future of education, where individualized assistance meets the power of decentralization,"
              buttonText="Connect"
              display="hidden"
            />
          </>
        }
        rightChildren={
          <>
            {/* <SearchBox /> */}
            <Image width={400} height={0} alt="" src="/assets/pngegg 2.svg" />
          </>
        }
      />
    </>
  );
}

export default Home;
