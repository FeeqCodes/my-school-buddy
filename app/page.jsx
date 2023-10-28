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
              paragraph="Nobody likes waiting for APIs to load. Use streaming to improve the user experience of chat bots. This tutorial uses streaming. Head over to Module X to get started! Nobody likes waiting for APIs to load. Use streaming to improve the user experience of chat bots. This tutorial uses streaming. Head over to Module X to get started!"
              buttonText="Connect"
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
