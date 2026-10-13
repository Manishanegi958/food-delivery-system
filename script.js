
"use strict";

// FoodieGo - Food Delivery System
// Frontend demo using HTML, CSS, JavaScript and LocalStorage.

const restaurants = [
    {
        id: 1,
        name: "Pizza Paradise",
        cuisine: "Italian • Pizza",
        rating: 4.8,
        time: "25-35 min",
        open: true,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        name: "Burger House",
        cuisine: "Burgers • Fast Food",
        rating: 4.7,
        time: "20-30 min",
        open: true,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 3,
        name: "Sweet Treats",
        cuisine: "Desserts • Bakery",
        rating: 4.9,
        time: "20-30 min",
        open: true,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        name: "Green Bowl Cafe",
        cuisine: "Healthy • Salads",
        rating: 4.6,
        time: "25-40 min",
        open: false,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        name: "Spice Street",
        cuisine: "Indian • Fast Food",
        rating: 4.7,
        time: "20-35 min",
        open: true,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        name: "Chill & Sip",
        cuisine: "Drinks • Beverages",
        rating: 4.5,
        time: "15-25 min",
        open: true,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80"
    }
];

const foods = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 249,
        rating: 4.9,
        popularity: 100,
        restaurant: "Pizza Paradise",
        description: "Classic cheese, fresh tomatoes and basil.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 349,
        rating: 4.8,
        popularity: 95,
        restaurant: "Pizza Paradise",
        description: "Cheesy pizza topped with pepperoni.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 3,
        name: "Classic Burger",
        category: "Burgers",
        price: 149,
        rating: 4.7,
        popularity: 98,
        restaurant: "Burger House",
        description: "Juicy patty, lettuce and signature sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        name: "Cheese Burger",
        category: "Burgers",
        price: 199,
        rating: 4.8,
        popularity: 90,
        restaurant: "Burger House",
        description: "Grilled burger with melted cheese.",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        name: "Crispy French Fries",
        category: "Fast Food",
        price: 99,
        rating: 4.5,
        popularity: 88,
        restaurant: "Burger House",
        description: "Golden fries seasoned to perfection.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 179,
        rating: 4.9,
        popularity: 92,
        restaurant: "Sweet Treats",
        description: "Rich chocolate cake with creamy frosting.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        name: "Chocolate Donut",
        category: "Desserts",
        price: 89,
        rating: 4.6,
        popularity: 82,
        restaurant: "Sweet Treats",
        description: "Soft donut covered in chocolate glaze.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 8,
        name: "Fresh Fruit Juice",
        category: "Beverages",
        price: 79,
        rating: 4.5,
        popularity: 80,
        restaurant: "Chill & Sip",
        description: "Refreshing fruit juice served chilled.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 9,
        name: "Cold Coffee",
        category: "Beverages",
        price: 119,
        rating: 4.7,
        popularity: 86,
        restaurant: "Chill & Sip",
        description: "Smooth, creamy iced coffee.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 10,
        name: "Healthy Salad Bowl",
        category: "Healthy Meals",
        price: 229,
        rating: 4.6,
        popularity: 75,
        restaurant: "Green Bowl Cafe",
        description: "Fresh vegetables with a light dressing.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 11,
        name: "Paneer Butter Masala",
        category: "Fast Food",
        price: 279,
        rating: 4.8,
        popularity: 94,
        restaurant: "Spice Street",
        description: "Creamy Indian paneer curry with spices.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 12,
        name: "Veggie Pizza",
        category: "Pizza",
        price: 299,
        rating: 4.7,
        popularity: 87,
        restaurant: "Pizza Paradise",
        description: "Fresh vegetables, herbs and melted cheese.",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80"
    }
];

const DELIVERY_FEE = 30;

const $ = (id) => document.getElementById(id);

let cart = loadCart();
let toastTimer;

// Escape dynamic text before inserting it into HTML.
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function money(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

function loadCart() {
    try {
        const saved = JSON.parse(localStorage.getItem("foodiego-cart") || "[]");

        if (!Array.isArray(saved)) return [];

        return saved
            .filter(item =>
                item &&
                Number.isInteger(item.id) &&
                foods.some(food => food.id === item.id) &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0 &&
                item.quantity <= 99
            )
            .map(item => ({
                id: item.id,
                quantity: item.quantity
            }));
    } catch {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem("foodiego-cart", JSON.stringify(cart));
    } catch {
        showToast("Unable to save your cart in this browser.");
    }
}

function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

// Restaurant listings
function renderRestaurants() {
    $("restaurantGrid").innerHTML = restaurants.map(restaurant => `
        <article class="restaurant-card">
            <img src="${restaurant.image}"
                 alt="${escapeHTML(restaurant.name)}"
                 loading="lazy">
            <div class="restaurant-info">
                <h3>${escapeHTML(restaurant.name)}</h3>
                <p>${escapeHTML(restaurant.cuisine)}</p>
                <div class="restaurant-meta">
                    <span class="rating">★ ${restaurant.rating}</span>
                    <span>${escapeHTML(restaurant.time)}</span>
                    <span class="status ${restaurant.open ? "" : "unavailable"}">
                        ${restaurant.open ? "● Open" : "● Closed"}
                    </span>
                </div>
                <button type="button" class="btn secondary restaurant-menu-button"
                        data-restaurant="${restaurant.id}"
                        style="width:100%;margin-top:14px"
                        ${restaurant.open ? "" : "disabled"}>
                    ${restaurant.open ? "Explore Menu →" : "Currently Closed"}
                </button>
            </div>
        </article>
    `).join("");
}

// Food listing, searching, filtering and sorting
function renderFoods() {
    const search = $("searchInput").value.trim().toLowerCase();
    const category = $("categoryFilter").value;
    const priceRange = $("priceFilter").value;
    const sort = $("sortFilter").value;

    let filtered = foods.filter(food => {
        const restaurant = restaurants.find(
            item => item.name === food.restaurant
        );

        const matchesSearch =
            food.name.toLowerCase().includes(search) ||
            food.restaurant.toLowerCase().includes(search) ||
            food.description.toLowerCase().includes(search) ||
            food.category.toLowerCase().includes(search);

        const matchesCategory =
            category === "All" || food.category === category;

        const matchesPrice =
            priceRange === "all" ||
            (priceRange === "under150" && food.price < 150) ||
            (priceRange === "150-300" &&
                food.price >= 150 && food.price <= 300) ||
            (priceRange === "over300" && food.price > 300);

        const restaurantOpen = restaurant && restaurant.open;

        return matchesSearch && matchesCategory &&
            matchesPrice && restaurantOpen;
    });

    if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => b.popularity - a.popularity);
    }

    $("foodGrid").innerHTML = filtered.map(food => `
        <article class="food-card">
            <img src="${food.image}"
                 alt="${escapeHTML(food.name)}"
                 loading="lazy">

            <div class="food-info">
                <div class="food-topline">
                    <h3>${escapeHTML(food.name)}</h3>
                    <span class="rating">★ ${food.rating}</span>
                </div>

                <span class="food-category">${escapeHTML(food.category)}</span>
                <p>${escapeHTML(food.description)}</p>
                <span class="food-restaurant">
                    📍 ${escapeHTML(food.restaurant)}
                </span>

                <div class="food-bottom">
                    <span class="food-price">${money(food.price)}</span>
                    <button class="add-button" type="button"
                            data-add="${food.id}">
                        + Add to Cart
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    $("noResults").hidden = filtered.length !== 0;
}

// Cart calculations
function getCartDetails() {
    return cart.map(item => {
        const food = foods.find(product => product.id === item.id);

        if (!food) return null;

        return {
            ...food,
            quantity: item.quantity,
            lineTotal: food.price * item.quantity
        };
    }).filter(Boolean);
}

function getSubtotal() {
    return getCartDetails().reduce(
        (total, item) => total + item.lineTotal, 0
    );
}

function getDeliveryFee() {
    return cart.length > 0 ? DELIVERY_FEE : 0;
}

function getGrandTotal() {
    return getSubtotal() + getDeliveryFee();
}

function addToCart(id) {
    const food = foods.find(item => item.id === id);

    if (!food) return;

    const restaurant = restaurants.find(
        item => item.name === food.restaurant
    );

    if (!restaurant || !restaurant.open) {
        showToast("This restaurant is currently closed.");
        return;
    }

    const existing = cart.find(item => item.id === id);

    if (existing) {
        if (existing.quantity >= 99) {
            showToast("Maximum quantity is 99 per item.");
            return;
        }
        existing.quantity++;
    } else {
        cart.push({ id, quantity: 1 });
    }

    saveCart();
    renderCart();
    showToast(food.name + " added to your cart!");
}

function changeQuantity(id, change) {
    const item = cart.find(product => product.id === id);

    if (!item) return;

    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }

    if (newQuantity > 99) {
        showToast("Maximum quantity is 99.");
        return;
    }

    item.quantity = newQuantity;
    saveCart();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
    showToast("Item removed from cart.");
}

function clearCart() {
    if (cart.length === 0) {
        showToast("Your cart is already empty.");
        return;
    }

    cart = [];
    saveCart();
    renderCart();
    showToast("Your cart has been cleared.");
}

function renderCart() {
    const items = getCartDetails();
    const totalQuantity = items.reduce(
        (total, item) => total + item.quantity, 0
    );

    $("cartCount").textContent = totalQuantity;
    $("subtotal").textContent = money(getSubtotal());
    $("deliveryFee").textContent = money(getDeliveryFee());
    $("grandTotal").textContent = money(getGrandTotal());

    $("clearCart").disabled = items.length === 0;
    $("checkoutButton").disabled = items.length === 0;

    $("cartItems").innerHTML = items.length
        ? items.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${escapeHTML(item.name)}">

                <div>
                    <h3>${escapeHTML(item.name)}</h3>
                    <p>${money(item.price)} each</p>

                    <div class="cart-item-controls">
                        <button class="quantity-button" type="button"
                                data-minus="${item.id}"
                                aria-label="Decrease ${escapeHTML(item.name)} quantity">−</button>

                        <span>${item.quantity}</span>

                        <button class="quantity-button" type="button"
                                data-plus="${item.id}"
                                aria-label="Increase ${escapeHTML(item.name)} quantity">+</button>

                        <button class="remove-button" type="button"
                                data-remove="${item.id}">Remove</button>
                    </div>
                </div>
            </div>
        `).join("")
        : `<p class="empty-message">Your cart is empty. Add some delicious food! 🍕</p>`;
}

// Cart drawer
function openCart() {
    $("cartDrawer").classList.add("open");
    $("cartOverlay").classList.add("show");
    document.body.classList.add("no-scroll");
    $("closeCart").focus();
}

function closeCart() {
    $("cartDrawer").classList.remove("open");
    $("cartOverlay").classList.remove("show");
    document.body.classList.remove("no-scroll");
}

// Checkout
function renderCheckoutSummary() {
    const items = getCartDetails();

    $("checkoutSummary").innerHTML = `
        <strong>Order Summary</strong>
        ${items.map(item => `
            <p>${escapeHTML(item.name)} × ${item.quantity}
            — ${money(item.lineTotal)}</p>
        `).join("")}
        <p>Subtotal: ${money(getSubtotal())}</p>
        <p>Delivery Fee: ${money(getDeliveryFee())}</p>
        <p><strong>Total: ${money(getGrandTotal())}</strong></p>
    `;
}

function startCheckout() {
    if (cart.length === 0) {
        showToast("Please add food to your cart first.");
        return;
    }

    closeCart();
    renderCheckoutSummary();

    $("checkoutSection").hidden = false;
    $("confirmationSection").hidden = true;

    $("checkoutSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Submit the demo order
function placeOrder(event) {
    event.preventDefault();

    const form = $("orderForm");

    if (!form.reportValidity()) return;

    if (cart.length === 0) {
        showToast("Your cart is empty. Please add food first.");
        $("checkoutSection").hidden = true;
        return;
    }

    const name = $("customerName").value.trim();
    const phone = $("customerPhone").value.trim();
    const address = $("customerAddress").value.trim();
    const payment = $("paymentMethod").value;

    if (name.length < 2 || address.length < 10) {
        showToast("Please enter valid customer details.");
        return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
        showToast("Enter a valid 10-digit Indian mobile number.");
        $("customerPhone").focus();
        return;
    }

    // Freeze the order details before clearing the cart.
    const orderItems = getCartDetails().map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        lineTotal: item.lineTotal
    }));

    const subtotal = getSubtotal();
    const delivery = getDeliveryFee();
    const total = getGrandTotal();

    const order = {
        orderId: "FG" + Date.now().toString().slice(-8),
        customer: name,
        phone,
        address,
        payment,
        items: orderItems,
        subtotal,
        delivery,
        total,
        placedAt: new Date().toLocaleString("en-IN")
    };

    showConfirmation(order);

    cart = [];
    saveCart();
    renderCart();

    form.reset();
    $("checkoutSection").hidden = true;
    $("confirmationSection").hidden = false;

    $("confirmationSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function showConfirmation(order) {
    const details = $("orderConfirmationDetails");

    details.innerHTML = `
        <h3>Order #${escapeHTML(order.orderId)}</h3>
        <p><strong>Customer:</strong> ${escapeHTML(order.customer)}</p>
        <p><strong>Phone:</strong> ${escapeHTML(order.phone)}</p>
        <p><strong>Address:</strong> ${escapeHTML(order.address)}</p>
        <p><strong>Payment:</strong> ${escapeHTML(order.payment)}</p>
        <p><strong>Placed at:</strong> ${escapeHTML(order.placedAt)}</p>
        <hr style="margin:12px 0;border:0;border-top:1px solid #eee">

        <h3>Items Ordered</h3>
        ${order.items.map(item => `
            <p>${escapeHTML(item.name)} × ${item.quantity}
            — ${money(item.lineTotal)}</p>
        `).join("")}

        <hr style="margin:12px 0;border:0;border-top:1px solid #eee">
        <p>Subtotal: ${money(order.subtotal)}</p>
        <p>Delivery Fee: ${money(order.delivery)}</p>
        <p><strong>Grand Total: ${money(order.total)}</strong></p>
        <p style="color:#26864b;margin-top:12px">
            ✓ Your demo order has been confirmed.
        </p>
    `;
}

// Event listeners
function initializeApp() {
    renderRestaurants();
    renderFoods();
    renderCart();

    $("searchInput").addEventListener("input", renderFoods);
    $("categoryFilter").addEventListener("change", renderFoods);
    $("priceFilter").addEventListener("change", renderFoods);
    $("sortFilter").addEventListener("change", renderFoods);

    // Category buttons
    $("categoryList").addEventListener("click", event => {
        const button = event.target.closest("[data-category]");

        if (!button) return;

        $("categoryFilter").value = button.dataset.category;

        document.querySelectorAll(".category").forEach(categoryButton => {
            categoryButton.classList.toggle(
                "active",
                categoryButton === button
            );
        });

        renderFoods();
        $("menu").scrollIntoView({ behavior: "smooth" });
    });

    // Add food to cart
    $("foodGrid").addEventListener("click", event => {
        const button = event.target.closest("[data-add]");

        if (button) addToCart(Number(button.dataset.add));
    });

    // Restaurant menu buttons
    $("restaurantGrid").addEventListener("click", event => {
        const button = event.target.closest("[data-restaurant]");

        if (!button) return;

        const restaurant = restaurants.find(
            item => item.id === Number(button.dataset.restaurant)
        );

        if (!restaurant || !restaurant.open) return;

        $("searchInput").value = restaurant.name;
        $("categoryFilter").value = "All";
        $("priceFilter").value = "all";

        document.querySelectorAll(".category").forEach(item => {
            item.classList.toggle(
                "active",
                item.dataset.category === "All"
            );
        });

        renderFoods();
        $("menu").scrollIntoView({ behavior: "smooth" });
    });

    $("openCart").addEventListener("click", openCart);
    $("closeCart").addEventListener("click", closeCart);
    $("cartOverlay").addEventListener("click", closeCart);

    $("cartItems").addEventListener("click", event => {
        const plus = event.target.closest("[data-plus]");
        const minus = event.target.closest("[data-minus]");
        const remove = event.target.closest("[data-remove]");

        if (plus) changeQuantity(Number(plus.dataset.plus), 1);
        if (minus) changeQuantity(Number(minus.dataset.minus), -1);
        if (remove) removeFromCart(Number(remove.dataset.remove));
    });

    $("clearCart").addEventListener("click", clearCart);
    $("checkoutButton").addEventListener("click", startCheckout);
    $("closeCheckout").addEventListener("click", () => {
        $("checkoutSection").hidden = true;
    });

    $("orderForm").addEventListener("submit", placeOrder);

    $("newOrderButton").addEventListener("click", () => {
        $("confirmationSection").hidden = true;
        $("checkoutSection").hidden = true;
        $("searchInput").value = "";
        $("categoryFilter").value = "All";
        $("priceFilter").value = "all";
        $("sortFilter").value = "popular";

        document.querySelectorAll(".category").forEach(item => {
            item.classList.toggle(
                "active",
                item.dataset.category === "All"
            );
        });

        renderFoods();

        $("home").scrollIntoView({ behavior: "smooth" });
    });

    // Escape key closes the cart.
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeCart();
    });
}

document.addEventListener("DOMContentLoaded", initializeApp);
