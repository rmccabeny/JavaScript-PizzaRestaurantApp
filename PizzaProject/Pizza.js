document.addEventListener("DOMContentLoaded", function () {
  var selectedSize; // Declare selectedSize as a global variable

  // Add an event listener to the "Place Order" button
  var orderButton = document.getElementById("btnOrder");
  if (orderButton) {
    orderButton.addEventListener("click", getReceipt);
  }

  function getReceipt() {
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0;

    var sizeArray = document.getElementsByName("size");
    for (var i = 0; i < sizeArray.length; i++) {
      if (sizeArray[i].checked) {
        selectedSize = sizeArray[i].value;
        console.log("Selected Size: " + selectedSize);
        text1 = text1 + sizeArray[i].value + "<br>";

        if (selectedSize === "Personal Pizza") {
          runningTotal += 6;
        } else if (selectedSize === "Small Pizza") {
          runningTotal += 8;
        } else if (selectedSize === "Medium Pizza") {
          runningTotal += 10;
        } else if (selectedSize === "Large Pizza") {
          runningTotal += 14;
        } else if (selectedSize === "Extra Large Pizza") {
          runningTotal += 16;
        }
      }
    }

    console.log(selectedSize + " = $" + runningTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    // Call the getTopping function to handle toppings and their quantities
    getTopping(runningTotal, text1);
  }

  function getTopping(runningTotal, text1) {
    var selectedTopping = [];

    var toppingArray = document.getElementsByName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
      if (toppingArray[j].checked) {
        var toppingQuantity = 1; // Since we're dealing with checkboxes, each checked item counts as 1
        selectedTopping.push(toppingArray[j].value);
        text1 = text1 + toppingQuantity + " " + toppingArray[j].value + "<br>";
        runningTotal += 1; // Each topping costs 1
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
});


