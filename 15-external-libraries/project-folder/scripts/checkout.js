import { cart, removeFromCart, calculateCartQuantity, updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

calculateCartQuantity(`.return-to-home-link`)

let cartSummaryHTML = '';
cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  calculateCartQuantity(`.return-to-home-link`);

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input class="quantity-input">
            <span class="save-quantity-link" data-product-id="${matchingProduct.id}">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link"  data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    calculateCartQuantity(`.return-to-home-link`);
  });
});

document.querySelectorAll('.js-update-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.add('is-editing-quantity');
  });
});

function validateQuantityInput(link) {
  const productId = link.dataset.productId;
    
  const container = document.querySelector(`.js-cart-item-container-${productId}`);
  container.classList.remove('is-editing-quantity');

  const quantityInput = Number(container.querySelector('.quantity-input').value);

  if ( quantityInput >= 0 && quantityInput < 1000) {
    container.querySelector(`.quantity-label`).textContent = quantityInput;
    updateQuantity(productId, quantityInput);
  } else {
    alert('Please enter a valid quantity between 0 and 1000.');
  }
}

document.querySelectorAll('.save-quantity-link').forEach((link) => {
  link.addEventListener('click', validateQuantityInput.bind(null, link));
});

document.querySelectorAll('.quantity-input').forEach((inputField) => {
  inputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const link = inputField.nextElementSibling;
      validateQuantityInput(link);
    }
  });
});