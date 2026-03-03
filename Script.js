let cart = [];
let total = 0;

const cartModal = document.getElementById('cart-modal');
const cartIcon = document.getElementById('cart-icon');
const closeBtn = document.querySelector('.close');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));
    
    cart.push({ name, price });
    total += price;
    updateCart();
  });
});

function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `\( {item.name} - ₹ \){item.price}`;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = total;
}

cartIcon.addEventListener('click', (e) => {
  e.preventDefault();
  cartModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = 'none';
  }
});
