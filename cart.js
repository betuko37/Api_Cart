function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = ''; // Limpiar contenido existente

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}" style="max-width: 100px;"> 
            <p>Precio: $${item.price} MX</p>
        `;
        cartContainer.appendChild(cartItem);
    });

    updateTotalCost(); 
}


function updateTotalCost() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCost = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-cost').innerText = `Total: $${totalCost.toFixed(2)} MX`;
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCost = cart.reduce((total, item) => total + item.price, 0);
    
    if (totalCost === 0) {
        alert("El carrito está vacío.");
    } else {
        alert(`El costo total de su compra es: $${totalCost.toFixed(2)} MX`);
        localStorage.removeItem('cart'); 
        displayCart();
        updateTotalCost();
    }
}

displayCart();
