import React from "react";
import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/router";
import { Image } from "@nextui-org/react";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center w-full min-h-20 bg-white lg:px-[150px] px-3 justify-between border-b">
      <div className="cursor-pointer" onClick={() => router.replace("/")}>
        <Image
          src="/ghotelLogo.svg"
          width={120}
          height={36}
          alt="ghotel trip logo"
        />
      </div>
      <ConnectKitButton mode="light" />
    </div>
  );
}
