import { hexToRgb } from "./hexToRgbFunction.js";
import { rgbToHex} from "./rgbToHexFunction.js";

$('document').ready(()=>{
//adding action listener to first input
    $('#hexColor').keyup(()=>{
//getting the value of hex input and changing to rgb
        const hex = $($('#hexColor')).val();
        const newRgb=hexToRgb(hex)
        const red=newRgb['r']
        const green=newRgb['g']
        const blue=newRgb['b']
        const newRgbStr=`(${red},${green},${blue})`
//showing the rgb value in rgb input as an output
        $('#rgbColor').val(newRgbStr)
//change the background to in users input
        $("body").css("background-color", hex);
    
    
    })
//adding action listener to second input
    $('#rgbColor').keyup(()=>{
//get the value of rgb input
        const rgb = $($('#rgbColor')).val();
        //turn the string into an array
        const rgbArray=rgb.split(",");
        
//get the colors r g b from the array using their index
        const r=rgbArray[0];
        const rgbDigits = r.replace("(", "");
        const red=parseInt(rgbDigits)
        
        const g=rgbArray[1];
        const green=parseInt(g)

        const b=rgbArray[2];
        const blue=parseInt(b)
//getting the value of hex input and changing to rgb
        const newHex=rgbToHex(red,green,blue)

//showing the newhex value in hex input as an output
        $('#hexColor').val(newHex)
        
//change the background to in users input
        $("body").css("background-color", newHex);
    })
   


})