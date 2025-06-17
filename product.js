let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h2').innerText;
        const productPrice = this.parentElement.querySelector('p').innerText;
        const product = { name: productName, price: productPrice };
        addToCart(product);
    });
});