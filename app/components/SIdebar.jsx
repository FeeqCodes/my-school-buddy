"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";

const Sidebar = () => {
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  const links = [
    { src: "/assets/Home Vector.svg", href: "/" },
    { src: "/assets/write Vector.svg", href: "/chat-buddy" },
    { src: "/assets/file.png", href: "/pdf-search" },
    { src: "/assets/video-Vector.svg", href: "/video-summary" },
    { src: "/assets/research-Vector.svg", href: "/research-agent" },
  ];

  useEffect(() => {
    isConnected;
    disconnect;
  }, [isConnected, disconnect]);

  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, 0.63)" }}
      className="static top-[10vh] w-[10%]  rounded-[10px]   items-center justify-between h-[70vh]  shadow-md drop-shadow-2xl shadow-black border border-white   "
    >
      <div className="rounded-[10px] w-full h-full absolute bg-[#15061B] backdrop-blur-lg blur-sm "></div>

      <div className="absolute w-full h-full py-10 flex flex-col justify-between items-center">
        <div className=" flex flex-col items-center gap-[3rem] ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:scale-125 transition-transform duration-200"
            >
              <Image height={10} width={20} alt="" src={link.src} />
            </Link>
          ))}
        </div>

        <div>
          <Image
            onClick={() => disconnect()}
            height={10}
            width={30}
            alt=""
            src="/assets/dsiconnect Vector.svg"
            className="hover:scale-125 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
