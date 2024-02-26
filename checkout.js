
const deleteAllBtn =document.querySelector('.delete-div .fa-trash-can')
const products = document.querySelector('article.products')


deleteAllBtn.addEventListener('click', () => {
    
    products.textContent = 'No product'
    products.classList.add('no-product')
} )