function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
}let cart = [];

function addToCart(productName, price) {
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }

    updateCart();
    showCartMessage(productName + " added to cart!");
}

function updateCart() {
    const cartCount = document.getElementById("cartCount");

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    cartCount.textContent = totalItems;
}

function openCart() {
    const cartBox = document.getElementById("cartBox");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {

            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <h3>${item.name}</h3>
                        <p>Rs. ${item.price} × ${item.quantity}</p>
                    </div>

                    <button onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>
            `;
        });
    }

    cartTotal.textContent = "Rs. " + total.toLocaleString();

    cartBox.classList.add("show");
}

function closeCart() {
    document.getElementById("cartBox").classList.remove("show");
}

function removeFromCart(index) {
    cart.splice(index, 1);

    updateCart();
    openCart();
}

function showCartMessage(message) {
    const box = document.getElementById("cartMessage");

    box.textContent = "✓ " + message;
    box.classList.add("show");

    setTimeout(function () {
        box.classList.remove("show");
    }, 2000);
}

function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
}

function openCheckout() {
    if (cart.length === 0) {
        showCartMessage("Your cart is empty!");
        return;
    }

    // Checkout page code yahan baad mein add karenge
}

function closeCheckout() {
    // Checkout close code yahan baad mein add karenge
}