function getReceipt() {
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0; // Declare sizeTotal here
  
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
      if (sizeArray[i],checked) {
        var selectedSize = sizeArray[i].value;
        text1 = text1 + selectedSize + "<br>";
         // Adjust the sizeTotal based on quantity
      if (selectedSize === "Personal Pizza") {
        runningTotal += 6 * quantity;
      } else if (selectedSize === "Small Pizza") {
        runningTotal += 8 * quantity;
      } else if (selectedSize === "Medium Pizza") {
        runningTotal += 10 * quantity;
      } else if (selectedSize === "Large Pizza") {
        runningTotal += 14 * quantity;
      } else if (selectedSize === "Extra Large Pizza") {
        runningTotal += 16 * quantity;
      }
    }
  }
}
       
       
        
        
  
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + runningTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
  
    // these variables will get passed on to each function
    getTopping(runningTotal, text1);
  
  
function getTopping(runningTotal, text1) {
    var selectedTopping = [];
  
    var toppingArray = document.getElementsByName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
      if (toppingArray[j].checked) {
        var quantity = parseInt(document.getElementById("qty_" + toppingArray[j].id).value, 10);
        for (var k = 0; k < quantity; k++) {
          selectedTopping.push(toppingArray[j].value);
          text1 = text1 + quantity + " " + toppingArray[j].value + "<br>";
          runningTotal += 1; // Each topping costs 1
        }
      }
    }

    var toppingCount = selectedTopping.length;
    if (toppingCount > 1)   {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
    }

