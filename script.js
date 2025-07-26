const products = [
  { id: 1, name: "Cool T-Shirt", price: 499, image: "https://via.placeholder.com/200x200?text=T-Shirt" },
  { id: 2, name: "Stylish Hoodie", price: 899, image: "https://via.placeholder.com/200x200?text=Hoodie" },
  { id: 3, name: "Jeans for Men", price: 799, image: "https://via.placeholder.com/200x200?text=Jeans" }
];

const cart = [];

window.onload = () => {
  const productList = document.getElementById("product-list");
  products.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <button onclick="orderNow('${p.name}', ${p.price})">Order Now</button>
      </div>
    `;
  });
  updateCart();
};

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total-price");
  cartItems.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((item, index) => {
    totalPrice += item.price;
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
  });
  total.innerText = totalPrice;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function orderNow(product, price) {
  const msg = `Hi, I want to order: ${product} - ₹${price}`;
  window.open(`https://wa.me/916003612799?text=${encodeURIComponent(msg)}`, "_blank");
}

function trackOrder() {
  const orderId = document.getElementById("orderId").value;
  if(orderId){
    const msg = `Hi, I want to track my order. Order ID: ${orderId}`;
    window.open(`https://wa.me/916003612799?text=${encodeURIComponent(msg)}`, "_blank");
  }
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;
  if(otp === "1234") {
    alert("Login Successful!");
  } else {
    alert("Invalid OTP. Try 1234");
  }
}