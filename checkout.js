
const deleteAllBtn =document.querySelector('.delete-div .fa-trash-can')
const products = document.querySelector('article.products')
// const minus = document.querySelector('.fa-minus')


deleteAllBtn.addEventListener('click', () => {
    
    products.textContent = 'No product'
    products.classList.add('no-product')
    document.querySelector('.delete-div').remove() 
    // document.querySelector('.delete-div').style.display = 'none'
} )

products.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('fa-plus')){
e.target.previousElementSibling.textContent++
calculatePrice(e.target)


    }else if (e.target.classList.contains('fa-minus')){
        // e.target.previousElementSibling.textContent--
    }else if (e.target.classList.contains('fa-trash-can')){
        // e.target.previousElementSibling.textContent = '0'

    }

})

const calculatePrice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price");

    const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");

    const quantity = btn.parentNode.querySelector('#quantity')
    productPrice.textContent = (quantity.textContent * discountedPrice.textContent).toFixed(2) 

};