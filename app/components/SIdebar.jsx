
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'







const Sidebar = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, 0.63)" }}
      className="static top-[10vh] w-[20rem]  rounded-[10px]   items-center justify-between h-[60vh]  shadow-md drop-shadow-2xl shadow-black border border-white   "
    >
      <div className="rounded-[10px] w-full h-full absolute bg-[#15061B] backdrop-blur-lg blur-sm "></div>

      <div className="absolute w-full h-full py-10 flex flex-col justify-between items-center">
        <div className=" flex flex-col items-center gap-[3rem] ">
          <Link href="/">
            <Image
              height={10}
              width={20}
              alt=""
              src="/assets/Home Vector.svg"
            />
          </Link>
          <Link href="/pages/pdf-search">
            <Image
              height={10}
              width={20}
              alt=""
              src="/assets/write Vector.svg"
            />
          </Link>
          <Link href="/pages/chat-buddy">
            <Image height={10} width={20} alt="" src="/assets/file.png" />
          </Link>
        </div>

        <div>
          <Link href="">
            <Image
              height={10}
              width={30}
              alt=""
              src="/assets/dsiconnect Vector.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar