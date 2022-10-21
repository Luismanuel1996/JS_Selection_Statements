let number = 23
let answer = prompt("guess my favorte number (1-30) :)");

if (answer < number)
  {console.log("too low, sorry!");}
else if (answer > number)  
  {console.log("ahhh, too high");}
else if (answer == 23)
  {console.log("Congratulations!!! you won!.....nothing") ;}


let birthMonth = prompt ("What is your Birth month") ;

// excersice 2

switch(birthMonth) {
  case "december" :
  case "january" :
  case "febuary" :
    console.log("born in winter") 
break; 
  case "march" :
  case "april" :
  case "may" :
  console.log("born in spring") ; 
break;  
      case "june" :
      case "july" :
      case "august" :
        console.log("born in summer") ; 
break; 
      case "september" :
      case "october" :
      case "november" :
        console.log("born in spring") ;
break; 
  default: console.log("not a month idiot!")
}
 
// excersice 3


 let typeId = "01";
  let colorId = "PU";
  let sizeId = "L";
  
  let type = "";
  let color = "";
  let size = "";
  
switch (typeId) {
  case "01":
type = "tank top"
break;
  case "01" :
    type = "T-Shirt"
  break;
  case "03":
    type = "Long Sleeve"
break;
  case "04":
    type = "Sweatshirt"
break;
  default: "other"
}

switch(colorId) {
  case "BL":
    color = "Black"
break;
  case "BU":
  color = "Blue"
break;
  case "Rd":
    color = "Red"
break;
  case "PU":
    color = "Purple"
break;
  default: "off-white"
}

switch (sizeId) {
  case "S":
    size = "small"
break;
  case "M":
  size ="Medium"
break;
  case "L":
  size ="Large"
break;
  case "X-L":
    size = "X-Large"
break;
  default: "unisex"
}

console.log(`Product: ${size} ${color} ${type}`);