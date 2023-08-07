// Sample data for cart items
const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      quantity: 2,
      imageUrl: 'path_to_image_1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      quantity: 1,
      imageUrl: 'path_to_image_2.jpg',
    },
  ];
  
  // Function to render cart items dynamically
  function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
  
    cartItems.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.className = 'cart-item';
  
      // Create and append the image tag
      const img = document.createElement('img');
      img.src = item.imageUrl;
      cartItemDiv.appendChild(img);
  
      // Create and append the div for item details
      const detailsDiv = document.createElement('div');
      detailsDiv.className = 'cart-item-details';
  
      // Create and append the <p> tag for the item name
      const itemName = document.createElement('p');
      itemName.innerText = item.name;
      detailsDiv.appendChild(itemName);
  
      // Create and append the <p> tag for the item price
      const itemPrice = document.createElement('p');
      itemPrice.innerText = `$${item.price}`;
      detailsDiv.appendChild(itemPrice);
  
      cartItemDiv.appendChild(detailsDiv);
  
      // Create and append the quantity div
      const quantityDiv = document.createElement('div');
      quantityDiv.className = 'quantity-container';
  
      // Create and append the + button
      const plusBtn = document.createElement('div');
      plusBtn.className = 'quantity-btn';
      plusBtn.innerText = '+';
      plusBtn.addEventListener('click', () => {
        // Increase quantity
        item.quantity += 1;
        renderCartItems();
      });
      quantityDiv.appendChild(plusBtn);
  
      // Create and append the quantity display
      const quantityDisplay = document.createElement('div');
      quantityDisplay.innerText = `${item.quantity}`;
      quantityDiv.appendChild(quantityDisplay);
  
      // Create and append the - button
      const minusBtn = document.createElement('div');
      minusBtn.className = 'quantity-btn';
      minusBtn.innerText = '-';
      minusBtn.addEventListener('click', () => {
        // Decrease quantity, but not below 1
        item.quantity = Math.max(1, item.quantity - 1);
        renderCartItems();
      });
      quantityDiv.appendChild(minusBtn);
  
      cartItemDiv.appendChild(quantityDiv);
  
      // Create and append the remove-total div
      const removeTotalDiv = document.createElement('div');
      removeTotalDiv.className = 'remove-total';
  
      // Create and append the remove button (again) for removeTotal
      const removeTotalBtn = document.createElement('div');
      removeTotalBtn.className = 'remove-btn';
      removeTotalBtn.innerText = 'Remove';
      removeTotalBtn.addEventListener('click', () => {
        // Remove the item from the cart
        const index = cartItems.indexOf(item);
        if (index !== -1) {
          cartItems.splice(index, 1);
          renderCartItems();
        }
      });
      removeTotalDiv.appendChild(removeTotalBtn);
  
      // Create and append the price * quantity <p> tag
      const itemTotalPrice = document.createElement('p');
      itemTotalPrice.innerText = `$${(item.price * item.quantity).toFixed(2)}`;
      removeTotalDiv.appendChild(itemTotalPrice);
  
      cartItemDiv.appendChild(removeTotalDiv);
  
      cartContainer.appendChild(cartItemDiv);
    });
  
    // Calculate and display the total price of the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalDiv = document.createElement('div');
    totalDiv.className = 'total';
    totalDiv.innerText = `Total Price: $${totalPrice.toFixed(2)}`;
    cartContainer.appendChild(totalDiv);
  }
  
  // Initial rendering of cart items
  renderCartItems();
  