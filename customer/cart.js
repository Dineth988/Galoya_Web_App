

function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    openCartModal();
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    renderCartItems();
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartBadge").textContent = totalItems;
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalElement.textContent = "Rs. 0.00";
        return;
    }

    let totalAmount = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        totalAmount += item.Price * item.quantity;
        return `
            <div class="cart-item">
                <h5>${item.Name}</h5> <!-- Ensure this matches the property name -->
                <p>Price: Rs. ${item.Price}</p>
                <p>Quantity: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></p>
                <p>Total: Rs. ${item.Price * item.quantity}</p>
                <button onclick="removeItem(${index})" class="btn btn-danger btn-sm">Remove</button>
            </div>
        `;
    }).join("");

    cartTotalElement.textContent = `Rs. ${totalAmount.toFixed(2)}`;
}

function openCartModal() {
    renderCartItems();
    new bootstrap.Modal(document.getElementById("cartModal")).show();
}

// Initialize cart badge on page load
updateCartBadge();