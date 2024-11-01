async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    displayProducts(products);
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Precio: $${product.price} MX</p>
            <button onclick="addToCart(${product.id}, '${product.image}', '${product.title}', ${product.price})">Agregar al Carrito</button>
        `;
        productContainer.appendChild(productCard);
    });
}


function addToCart(id, image, title, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = { id, image, title, price };
    
    // Verifica si el producto ya está en el carrito antes de agregarlo
    const existingItem = cart.find(cartItem => cartItem.id === id);
    if (!existingItem) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${title} ha sido agregado al carrito!`);
    } else {
        alert(`${title} ya está en el carrito.`);
    }
}


fetchProducts();
