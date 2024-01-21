import { Image } from "@nextui-org/react";

export default function VoucherDisplay() {
  return (
    <div className="flex flex-col text-sm font-semibold text-center w-fit space-y-2">
      <Image src="/token/gho.svg" width={100} height={100} alt="gho" />
      <div>
        <div>$1030.77</div>
        <div className="text-xs text-tertiary font-normal">Remaining</div>
      </div>
    </div>
  );
}
