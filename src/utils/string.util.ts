export function shortenAddress(fullAddress: string): string {
  const prefixLength = 6; // Number of characters to keep from the beginning
  const suffixLength = 4; // Number of characters to keep from the end

  const prefix = fullAddress.slice(0, prefixLength);
  const suffix = fullAddress.slice(-suffixLength);

  return `${prefix}...${suffix}`;
}
