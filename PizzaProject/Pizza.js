var quantity = 0; // Declare quantity as a global variable

function getReceipt() {
  var text1 = "<h3>You ordered:</h3>";
  var runningTotal = 0;
  var selectedSize; // Declare selectedSize as a local variable
  var sizeTotal = 0; // Declare sizeTotal as a local variable

  var sizeArray = document.getElementsByClassName("size");
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      selectedSize = sizeArray[i].value;
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

  // Pass selectedSize as an argument
  getTopping(runningTotal, text1, selectedSize);
}

function getTopping(runningTotal, text1, selectedSize) {
  var selectedTopping = [];
  var pizzaQuantity = 0; // Initialize pizza quantity

  var sizeArray = document.getElementsByName("size");
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      pizzaQuantity = parseInt(document.getElementById("qty_" + sizeArray[i].id).value, 10);
      break; // Stop the loop since we found the selected size
    }
  }

  // Rest of the code remains unchanged...
}
