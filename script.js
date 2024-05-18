let cart = [];

function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${item.name} - $${item.price} <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });
    
    document.getElementById('total-price').innerText = totalPrice;
    
    const custOrderInput = document.getElementById('cust_order');
    custOrderInput.value = JSON.stringify(cart);
}

function prepareOrderData() {
  const custOrderInput = document.getElementById('cust_order');
  const orderData = cart.map(item => ({ prod_name: item.name, prod_price: item.price }));
  custOrderInput.value = JSON.stringify(orderData);
}

