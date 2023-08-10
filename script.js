var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

var cartPage = document.querySelector(".cart-page");

function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function removeCartItem(cartItem) {
    var index = cartItems.findIndex(function(item) {
        return item.name === cartItem.querySelector(".cart-item-details p:first-child").textContent;
    });

    if (index !== -1) {
        cartItems.splice(index, 1);
        updateLocalStorage();
    }
}

// Loop through each item in cart
cartItems.forEach(function(item) {
    var cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    var img = document.createElement("img");
    img.src = item.img_url;
    img.height = 70; 
    img.width = 60;  
    cartItem.appendChild(img);

    var details = document.createElement("div");
    details.className = "cart-item-details";

    var productName = document.createElement("p");
    productName.textContent = item.name;
    details.appendChild(productName);

    var productPrice = document.createElement("p");
    productPrice.textContent = "Price: $" + item.price;
    details.appendChild(productPrice);

    cartItem.appendChild(details);

    var quantityDiv = document.createElement("div");
    quantityDiv.className = "cart-quantity";

    var decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", function() {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            updateTotalPrice();
        }
    });

    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.addEventListener("change", function() {
        if (quantityInput.value < 1) {
            quantityInput.value = 1;
        }
        updateTotalPrice();
    });

    var increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", function() {
        quantityInput.value++;
        updateTotalPrice();
    });

    quantityDiv.appendChild(decreaseButton);
    quantityDiv.appendChild(quantityInput);
    quantityDiv.appendChild(increaseButton);
    cartItem.appendChild(quantityDiv);

    var deleteDiv = document.createElement("div");
    deleteDiv.className = "cart-delete";

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        cartPage.removeChild(cartItem);
        removeCartItem(cartItem);
        updateTotalPrice();
    });

    var totalPrice = document.createElement("p");
    totalPrice.textContent = "Total: $" + item.price;
    totalPrice.className = "total-price";

    deleteDiv.appendChild(totalPrice);
    deleteDiv.appendChild(deleteButton);
    cartItem.appendChild(deleteDiv);

    cartPage.appendChild(cartItem);
});

var parentContainer = document.createElement("div");
parentContainer.className = "parent-container";

var ageContainer = document.createElement("div");
ageContainer.className = "cart-age-container";

var ageToggle = document.createElement("input");
ageToggle.type = "checkbox";
ageToggle.id = "age-toggle";

var ageText = document.createElement("p");
ageText.className = "cart-age-text";
ageText.textContent = "I'm 18+";

var ageInfo = document.createElement("p");
ageInfo.className = "age-info";
ageInfo.style.marginLeft = "10px";
ageInfo.style.display = "inline";

ageToggle.addEventListener("change", function() {
    ageInfo.textContent = ageToggle.checked ? "An adult signature (18+) is required for delivery" : "Not allowed";
});

var rightAlignedContainer = document.createElement("div");
rightAlignedContainer.className = "right-aligned-container";

var slashedPrice = document.createElement("div");
slashedPrice.className = "slashed-price";
var originalPriceSpan = document.createElement("span");
originalPriceSpan.textContent = "$" + calculateSubtotal().toFixed(2);
originalPriceSpan.style.textDecoration = "line-through"; 
slashedPrice.appendChild(document.createTextNode("Slashed Price: "));
slashedPrice.appendChild(originalPriceSpan);

rightAlignedContainer.appendChild(slashedPrice);

var actualSubtotal = document.createElement("div");
actualSubtotal.className = "actual-subtotal";
rightAlignedContainer.appendChild(actualSubtotal);

var savedAmount = document.createElement("p");
savedAmount.textContent = "You saved $1000";
rightAlignedContainer.appendChild(savedAmount);

ageContainer.appendChild(ageText);
ageContainer.appendChild(ageToggle);
ageContainer.appendChild(ageInfo);

parentContainer.appendChild(ageContainer);
parentContainer.appendChild(rightAlignedContainer);

var cartSummary = document.createElement("div");
cartSummary.className = "cart-summary";

var totalItemsElement = document.createElement("h3");
totalItemsElement.textContent = "SubTotal: " + cartItems.length;
totalItemsElement.style.color = "#bf0d12";
cartSummary.appendChild(totalItemsElement);

var checkoutButton = document.createElement("button");
checkoutButton.setAttribute("class", "checkoutButton");
checkoutButton.textContent = "Checkout";
checkoutButton.style.backgroundColor = "#bf0d12";
checkoutButton.style.color = "white";

cartPage.appendChild(parentContainer);
cartPage.appendChild(cartSummary);
cartPage.appendChild(checkoutButton);

function calculateSubtotal() {
    var total = 0;
    cartItems.forEach(function(item) {
        total += parseFloat(item.price); 
    });
    return total;
}

function updateTotalPrice() {
  var actualTotal = calculateSubtotal(); 

  var totalPrices = document.querySelectorAll(".total-price");
  totalPrices.forEach(function(totalPriceElement) {
      var cartItem = totalPriceElement.closest(".cart-item");
      var quantityInput = cartItem.querySelector("input");
      var itemPrice = parseFloat(cartItem.querySelector(".cart-item-details p:last-child").textContent.replace("Price: $", ""));
      totalPriceElement.textContent = "Total: $" + (itemPrice * quantityInput.value).toFixed(2);

      actualTotal += itemPrice * quantityInput.value; 
  });

  totalItemsElement.textContent = `SubTotal: (${cartItems.length} items)`;

  actualSubtotal.textContent = "Actual Subtotal $" + actualTotal.toFixed(2); 
  slashedPrice.innerHTML = `Discounted Price: <span class="original-price">$${(actualTotal + 1000).toFixed(2)}</span>`;
}
// Initial update
updateTotalPrice();


