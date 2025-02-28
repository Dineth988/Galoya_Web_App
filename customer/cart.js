import { db } from "./firebase.js";
import { doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "./firebase.js";

// This function fetches cart data from Firestore and renders it to the page.
async function fetchCartData() {
    const user = auth.currentUser;
    if (user) {
        const cartRef = doc(db, "carts", user.uid);
        const cartDoc = await getDoc(cartRef);

        if (cartDoc.exists()) {
            const cartData = cartDoc.data();
            const cartItems = cartData.items || [];
            let totalPrice = 0;

            // Clear the cart items container before re-rendering
            const cartItemsContainer = document.getElementById("cartItems");
            cartItemsContainer.innerHTML = "";

            cartItems.forEach(item => {
                totalPrice += item.price * item.quantity;
                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h5>${item.name}</h5>
                            <p>Price: $${item.price}</p>
                            <p>Quantity: ${item.quantity}</p>
                        </div>
                        <a href="#" class="remove-item" data-id="${item.id}">Remove</a>
                    </div>
                `;
            });

            document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
        } else {
            // If no cart is found
            const cartItemsContainer = document.getElementById("cartItems");
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        }
    } else {
        alert("You must be logged in to view your cart.");
        window.location.href = "login.html";
    }
}

// Function to add an item to the cart
async function addToCart(item) {
    const user = auth.currentUser;
    if (user) {
        const cartRef = doc(db, "carts", user.uid);
        const cartDoc = await getDoc(cartRef);

        let updatedItems = [];
        if (cartDoc.exists()) {
            const cartData = cartDoc.data();
            updatedItems = cartData.items || [];
            const existingItemIndex = updatedItems.findIndex(i => i.id === item.id);
            
            if (existingItemIndex >= 0) {
                updatedItems[existingItemIndex].quantity += item.quantity;
            } else {
                updatedItems.push(item);
            }

            await updateDoc(cartRef, {
                items: updatedItems
            });
        } else {
            updatedItems.push(item);
            await setDoc(cartRef, { items: updatedItems });
        }

        fetchCartData(); // Refresh the cart after adding the item
    } else {
        alert("You must be logged in to add items to your cart.");
        window.location.href = "login.html";
    }
}

// Function to remove an item from the cart
async function removeFromCart(itemId) {
    const user = auth.currentUser;
    if (user) {
        const cartRef = doc(db, "carts", user.uid);
        const cartDoc = await getDoc(cartRef);

        if (cartDoc.exists()) {
            const cartData = cartDoc.data();
            const updatedItems = cartData.items.filter(item => item.id !== itemId);

            await updateDoc(cartRef, {
                items: updatedItems
            });

            fetchCartData(); // Refresh the cart after removing the item
        }
    }
}

// Event listener for the remove item button
document.addEventListener('DOMContentLoaded', () => {
    fetchCartData();

    // Event delegation to remove items from the cart
    document.getElementById("cartItems").addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("remove-item")) {
            const itemId = e.target.getAttribute("data-id");
            removeFromCart(itemId);
        }
    });
});

// Export the functions if needed for other parts of your app
export { fetchCartData, addToCart, removeFromCart };
