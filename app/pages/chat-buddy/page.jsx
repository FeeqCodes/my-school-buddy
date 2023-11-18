import Hero from "@/app/components/Hero";
import SearchBox from "@/app/components/SearchBox";
import Sidebar from "@/app/components/Sidebar";
import TwoColumnLayout from "@/app/components/TwoColumnLayout";
import React from "react";

const ChatBuddy = () => {
  return (
    <>
      <TwoColumnLayout
        leftChildren={
          <>
            <Sidebar />
            <Hero
              title="ASK BUDDY"
              paragraph="Nobody likes waiting for APIs to load. Use streaming to improve the user experience of chat bots. This tutorial uses streaming. Head over to Module X to get started! Nobody likes waiting for APIs to load. Use streaming to improve the user experience of chat bots. This tutorial uses streaming. Head over to Module X to get started!
              "
              buttonText="Upload"
              display="hidden"
            />
          </>
        }
        rightChildren={
          <>
            <SearchBox />
          </>
        }
      />
    </>
  );
};

export default ChatBuddy;
