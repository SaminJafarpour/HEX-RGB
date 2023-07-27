function rgbToHex(r, g, b) {
  const hex = (c) => {
    const hexValue = c.toString(16);
    return hexValue.length === 1 ? "0" + hexValue : hexValue;
  };

  const red = hex(r);
  const green = hex(g);
  const blue = hex(b);

  return "#" + red + green + blue;
}


export {rgbToHex}