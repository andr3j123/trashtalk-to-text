export function convertFromJgDiff(text: string) {
  const binary = text
    .split(/(?<=Diff|Jg)/g)
    .map((bit) => {
      if (bit === "Jg") return "1";
      if (bit === "Diff") return "0";
      return " ";
    })
    .join("");

  const asciiString =
    binary
      .match(/.{1,8}/g)
      ?.map((byte) => String.fromCharCode(parseInt(byte, 2))) // Convert each byte to ASCII
      .join("") || "";

  return asciiString;
}
