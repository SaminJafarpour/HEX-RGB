function hexToRgb(hex) {
    const hexDigits = hex.replace("#", "");
    const red = parseInt(hexDigits.substring(0, 2), 16);
    const green = parseInt(hexDigits.substring(2, 4), 16);
    const blue = parseInt(hexDigits.substring(4, 6), 16);
  
    return{
      r: red,
      g: green,
      b: blue,
    }
    ;
  }
  
export {hexToRgb}