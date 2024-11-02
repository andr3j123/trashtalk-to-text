function stringToBinary(str: string) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
}

export function convertToJgDiff(text: string) {
  const binary = stringToBinary(text);

  console.log(binary.split(""));

  return binary
    .split("")
    .map((bit) => {
      if (bit === "1") return "Jg";
      if (bit === "0") return "Diff";
      return " ";
    })
    .join("");
}
