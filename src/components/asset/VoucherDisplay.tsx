import { Image } from "@nextui-org/react";

interface VoucherDisplayProps {
  balance: string;
  uri: string;
  voucherId: number;
}

export default function VoucherDisplay({
  balance,
  uri,
  voucherId,
}: VoucherDisplayProps) {
  const paddedString = voucherId.toString().padStart(64, "0");
  console.log(uri);
  console.log(paddedString);
  const url = `https://bafybeie4iz6fgjunkvwsu6gmb4evfjkdewi25wykufehuhtu3jlu6rknby.ipfs.nftstorage.link/${paddedString}.png`;
  console.log(url);
  return (
    <div className="flex flex-col text-sm font-semibold text-center w-fit space-y-2">
      <Image src={url} width={133} height={100} alt="gho" />
      <div>
        <div>${(+balance).toLocaleString()}</div>
        <div className="text-xs text-tertiary font-normal">Remaining</div>
      </div>
    </div>
  );
}
