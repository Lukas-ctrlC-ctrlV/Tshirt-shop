const cart = document.getElementById('cart');
const toggleCartBtn = document.getElementById('toggle-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const itemCountElement = document.getElementById('item-count');

let total = 0;
let itemCount = 0;

toggleCartBtn.addEventListener('click', () => {
    if (cartItemsContainer.style.display === 'none') {
        cartItemsContainer.style.display = 'block';
        cartTotalElement.style.display = 'block';
        itemCountElement.style.display = 'block';
        toggleCartBtn.textContent = 'Hide Cart';
    } else {
        cartItemsContainer.style.display = 'none';
        cartTotalElement.style.display = 'none';
        itemCountElement.style.display = 'none';
        toggleCartBtn.textContent = 'Show Cart';
    }
});

document.querySelectorAll('.item').forEach(item => {
    const button = item.querySelector('button');
    button.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').getAttribute('src');
        const priceText = item.querySelector('.info p:first-child').textContent;
        const sizeText = item.querySelector('.info p:nth-child(2)').textContent;

        const price = parseFloat(priceText.replace('$', ''));
        total += price;
        itemCount++;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${imgSrc}" alt="">
            <div class="cart-item-details">
                <p><strong>${priceText}</strong></p>
                <p>${sizeText}</p>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
        cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
        itemCountElement.textContent = `Items in cart: ${itemCount}`;
    });
});
