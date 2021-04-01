const colorCache = new Map<string, string>();
const colorList = ["light-blue","indigo","amber","blue-grey","teal","deep-purple","red","light-green","green","cyan","deep-orange","brown","purple","blue","lime","pink","orange","yellow"];

function text2color(input: string) {
  const current = colorCache.get(input);
  if(current) return current;

  const shifted = colorList.shift() || "red";
  colorList.push(shifted);

  colorCache.set(input, shifted);
  return shifted;
}

export { text2color }
