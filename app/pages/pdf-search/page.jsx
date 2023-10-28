import React from "react";
import SearchBox from "@/app/components/SearchBox";
import TwoColumnLayout from "@/app/components/TwoColumnLayout";
import Sidebar from "@/app/components/Sidebar";
import Hero from "@/app/components/Hero";
import Image from "next/image";

function PdfSearch() {
  return (
    <>
      <TwoColumnLayout
        leftChildren={
          <>
            <Sidebar />
            <Hero
              title="PDF SEARCH"
              paragraph="Nobody likes waiting for APIs to load. Use streaming to improve the user experience of chat bots. This tutorial uses streaming. Head over to Module X to get started! Nobody likes waiting for APIs to load. Use streaming to improve the user experience of chat bots. This tutorial uses streaming. Head over to Module X to get started!
              "
              buttonText="Upload"
            />
          </>
        }
        rightChildren={
          <>
            <Image width={400} height={0} alt="" src="/assets/pngegg 2.svg" />
            <SearchBox />
          </>
        }
      />
    </>
  );
}

export default PdfSearch;
