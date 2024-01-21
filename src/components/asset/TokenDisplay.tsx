import { Image } from "@nextui-org/react";

interface TokenDisplayProps {
  token: string;
  path: string;
  amount: number;
  price: number;
}

export default function TokenDisplay({ token, path, amount, price }: TokenDisplayProps) {
  return (
    <div className="flex space-x-2 text-sm font-semibold">
      <Image src={path} width={32} height={32} alt="gho" />
      <div className="grow">
        <div className="flex justify-between">
          <div>{amount.toLocaleString()} {token}</div>
          <div>${price.toLocaleString()} USD</div>
        </div>
        <div className="text-xs text-tertiary font-medium">{token} Token</div>
      </div>
    </div>
  );
}
