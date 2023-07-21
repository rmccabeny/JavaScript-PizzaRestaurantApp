var quantity = 0; // Declare quantity as a global variable
var selectedSize; // Declare selectedSize as a global variable

function getReceipt() {
  var text1 = "<h3>You ordered:</h3>";
  var runningTotal = 0;
  var sizeTotal = 0;

  var sizeArray = document.getElementsByClassName("size");
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      selectedSize = sizeArray[i].value;
      console.log("Selected Size: " + selectedSize)
      text1 = text1 + selectedSize + "<br>";

      if (selectedSize === "Personal Pizza") {
        sizeTotal += 6;
      } else if (selectedSize === "Small Pizza") {
        sizeTotal += 8;
      } else if (selectedSize === "Medium Pizza") {
        sizeTotal += 10;
      } else if (selectedSize === "Large Pizza") {
        sizeTotal += 14;
      } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal += 16;
      }
    }
  }

  runningTotal = sizeTotal;
  console.log(selectedSize + " = $" + runningTotal + ".00");
  console.log("size text1: " + text1);
  console.log("subtotal: $" + runningTotal + ".00");

  // these variables will get passed on to each function
  getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
  var selectedTopping = [];
  var pizzaQuantity = 0; // Initialize pizza quantity

  var sizeArray = document.getElementsByName("size");
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      pizzaQuantity = parseInt(document.getElementById("qty_" + sizeArray[i].id).value, 10);
      break; // Stop the loop since we found the selected size
    }
  }

  // Add the pizza quantity to the runningTotal
  runningTotal += sizeTotal * pizzaQuantity;
  text1 += pizzaQuantity + " " + selectedSize + " Pizza(s)<br>";

  var toppingArray = document.getElementsByName("toppings");
  for (var j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      var toppingQuantity = parseInt(document.getElementById("qty_" + toppingArray[j].id).value, 10);
      for (var k = 0; k < toppingQuantity; k++) {
        selectedTopping.push(toppingArray[j].value);
        text1 = text1 + toppingQuantity + " " + toppingArray[j].value + "<br>";
        runningTotal += 1; // Each topping costs 1
      }
    }
  }

  var toppingCount = selectedTopping.length;
  var toppingTotal = 0;
  if (toppingCount > 1) {
    toppingTotal = toppingCount - 1;
  }

  runningTotal += toppingTotal;
  console.log("total selected topping items: " + toppingCount);
  console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
  console.log("topping text1: " + text1);
  console.log("Purchase Total: $" + runningTotal + ".00");
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
