const deleteAllBtn = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector("article.products");
// const minus = document.querySelector('.fa-minus')

deleteAllBtn.addEventListener("click", () => {
  products.textContent = "No product";
  products.classList.add("no-product");
  document.querySelector(".delete-div").remove();
  // document.querySelector('.delete-div').style.display = 'none'
  calculateTotalPrice()
});

products.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.textContent++;
    calculatePrice(e.target);
  } else if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.textContent > 1) {
      e.target.nextElementSibling.textContent--;
      calculatePrice(e.target);
    }
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".product").remove();
    calculatePrice(e.target);
  }
});

const FREE_SHIPPING_LIMIT = 3000
const SHIPPING_PRICE = 25.99
const TAX_RATE = 0.18



const calculatePrice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price");

  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");

  const quantity = btn.parentNode.querySelector("#quantity");
  productPrice.textContent = (
    quantity.textContent * discountedPrice.textContent
  ).toFixed(2);
  calculateTotalPrice();
};

const calculateTotalPrice = () => {
  const prices = document.querySelectorAll("#product-price");
  const total = [...prices].reduce(
    (sum, price) => sum + Number(price.textContent),
    0
  );

const shippingPrice = total >= FREE_SHIPPING_LIMIT || total === 0 ? 0.00 : SHIPPING_PRICE


const taxPrice = total * TAX_RATE
const sum = total + taxPrice + shippingPrice

  const selectedPrice = document.querySelector("#selected-price");
  selectedPrice.textContent = total.toFixed(2);


document.getElementById('shipping').textContent = shippingPrice.toFixed(2)
document.getElementById('tax').textContent = taxPrice.toFixed(2)
document.getElementById('total').textContent = sum.toFixed(2)

};

window.addEventListener('load', () => {
calculateTotalPrice()
})

//const TAX_RATE = 0.18