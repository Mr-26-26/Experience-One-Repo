// Entry point of the application
console.log('Starting the application...');
(function main() {
    'use strict';
    // Application initialization
    initialize();

    function initialize() {
        console.log('Application initialized');
        // Example: Set up a welcome message
        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'welcome-message';
        welcomeMessage.textContent = 'Bem-vindo à nossa Loja!';
        document.body.prepend(welcomeMessage);

        // Initialize event listeners
        document.querySelector('.search-bar button')?.addEventListener('click', searchProducts);
        document.querySelector('.subscribe-button')?.addEventListener('click', subscribe);
        document.querySelector('.contact-button')?.addEventListener('click', contact);
        document.querySelector('.cart-button')?.addEventListener('click', () => addToCart('Produto Exemplo', 11500));
        document.querySelector('.modal-button')?.addEventListener('click', openModal);
        document.querySelector('.close-button')?.addEventListener('click', closeModal);
        document.querySelector('.nav-button')?.addEventListener('click', toggleNav);
        document.querySelector('.sidenav-close-button')?.addEventListener('click', closeNav);
        document.querySelector('.sidenav-open-button')?.addEventListener('click', openNav);
    }

    // Example function
    function exampleFunction() {
        console.log('This is an example function');
        const num1 = 5;
        const num2 = 10;
        const sum = num1 + num2;
        console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    }

    exampleFunction();
})();

// Function to handle the search bar functionality
function searchProducts() {
    const query = document.querySelector('.search-bar input')?.value;
    if (!query) {
        alert('Por favor, insira um termo para buscar.');
        return;
    }
    // CATEGORIA DOS PRODUTOS EM GERAL
    const products = [
        { name: 'Camisa', category: 'Roupas' },
        { name: 'Casaco', category: 'Roupas' },
        { name: 'Vestido', category: 'Roupas' },
        { name: 'Saia', category: 'Roupas' },
        { name: 'Calça', category: 'Roupas' },
        { name: 'Shorts', category: 'Roupas' },
        { name: 'Jaqueta', category: 'Roupas' },
        { name: 'Blusa', category: 'Roupas' },
        { name: 'Bermuda', category: 'Roupas' },
        { name: 'Macacão', category: 'Roupas' },
        { name: 'Terno', category: 'Roupas' },
        { name: 'Sunga', category: 'Roupas' },
        { name: 'Maiô', category: 'Roupas' },
        { name: 'Biquíni', category: 'Roupas' },
        { name: 'Roupa de Banho', category: 'Roupas' },
        { name: 'Roupa de Cama', category: 'Acessórios' },
        { name: 'Roupa de Mesa', category: 'Acessórios' },
        { name: 'Roupa de Banho', category: 'Acessórios' },
        { name: 'Roupa de Praia', category: 'Acessórios' },
        { name: 'Roupa de Festa', category: 'Acessórios' },
        { name: 'Roupa de Trabalho', category: 'Acessórios' },
        { name: 'Roupa de Ginástica', category: 'Acessórios' },
        { name: 'Roupa de Bebê', category: 'Acessórios' },
        { name: 'Roupa Infantil', category: 'Acessórios' },
        { name: 'Roupa Masculina', category: 'Acessórios' },
        { name: 'Roupa Feminina', category: 'Acessórios' },
        { name: 'Sapato', category: 'Sapatos' },
        { name: 'Tênis', category: 'Sapatos' },
        { name: 'Bota', category: 'Sapatos' },
        { name: 'Sandália', category: 'Sapatos' },
        { name: 'Chinelo', category: 'Sapatos' },
        { name: 'Sapatilha', category: 'Sapatos' },
        { name: 'Botina', category: 'Sapatos' },
        { name: 'Tamanco', category: 'Sapatos' },
        { name: 'Coturno', category: 'Sapatos' },
        { name: 'Mocassim', category: 'Sapatos' },
        { name: 'Oxford', category: 'Sapatos' },
        { name: 'Loafer', category: 'Sapatos' },
        { name: 'Brogue', category: 'Sapatos' },
        { name: 'Derby', category: 'Sapatos' },
        { name: 'Ankle Boot', category: 'Sapatos' },
        { name: 'Over the Knee Boot', category: 'Sapatos' },
        { name: 'Calça Jeans', category: 'Roupas' },
        { name: 'Calça de Moletom', category: 'Roupas' },
        { name: 'Calça de Sarja', category: 'Roupas' },
        { name: 'Calça de Couro', category: 'Roupas' },
        { name: 'Calça de Lã', category: 'Roupas' },
        { name: 'Calça de Algodão', category: 'Roupas' },
        { name: 'Calça de Linho', category: 'Roupas' },
        { name: 'Calça de Veludo', category: 'Roupas' },
        { name: 'Calça de Cetim', category: 'Roupas' },
        { name: 'Calça de Seda', category: 'Roupas' },
        { name: 'Perfume Feminino', category: 'Cosméticos' },
        { name: 'Perfume Masculino', category: 'Cosméticos' },
        { name: 'Desodorante', category: 'Cosméticos' },
        { name: 'Creme Hidratante', category: 'Cosméticos' },
        { name: 'Protetor Solar', category: 'Cosméticos' },
        { name: 'Maquiagem', category: 'Cosméticos' },
        { name: 'Base', category: 'Cosméticos' },
        { name: 'Corretivo', category: 'Cosméticos' },
        { name: 'Pó Compacto', category: 'Cosméticos' },
        { name: 'Blush', category: 'Cosméticos' },
        { name: 'Sombra', category: 'Cosméticos' },
        { name: 'Delineador', category: 'Cosméticos' },
        { name: 'Máscara para Cílios', category: 'Cosméticos' },
        { name: 'Batom', category: 'Cosméticos' },
        { name: 'Gloss Labial', category: 'Cosméticos' },
        { name: 'Esmalte', category: 'Cosméticos' },
        { name: 'Removedor de Esmalte', category: 'Cosméticos' },
        { name: 'Creme para o Rosto', category: 'Cosméticos' },
        { name: 'Creme para o Corpo', category: 'Cosméticos' },
        { name: 'Creme para as Mãos', category: 'Cosméticos' },
        { name: 'Creme para os Pés', category: 'Cosméticos' },
        { name: 'Creme para os Olhos', category: 'Cosméticos' },
        { name: 'Creme Anti-Idade', category: 'Cosméticos' },
        { name: 'Creme Antienvelhecimento', category: 'Cosméticos' },
        { name: 'Creme Clareador', category: 'Cosméticos' },
        { name: 'Creme Esfoliante', category: 'Cosméticos' },
        { name: 'Creme Hidratante Corporal', category: 'Cosméticos' },
        { name: 'Creme Hidratante Facial', category: 'Cosméticos' },
        { name: 'Creme Hidratante para Mãos', category: 'Cosméticos' },
        { name: 'Creme Hidratante para Pés', category: 'Cosméticos' },
        { name: 'Creme Hidratante para Olhos', category: 'Cosméticos' },
        { name: 'Creme Hidratante para Corpo', category: 'Cosméticos' },
        { name: 'Creme Hidratante para Cabelos', category: 'Cosméticos' },
        { name: 'Creme Anti-Queda', category: 'Cosméticos' },
        { name: 'Creme Anticaspa', category: 'Cosméticos' },
        { name: 'Creme Antifrizz', category: 'Cosméticos' },
        { name: 'Creme Anti-frizz', category: 'Cosméticos' },
        { name: 'Creme para Cabelos Cacheados', category: 'Cosméticos' },
        { name: 'Creme para Cabelos Lisos', category: 'Cosméticos' },
        { name: 'Creme para Cabelos Ondulados', category: 'Cosméticos' },
        { name: 'Creme para Cabelos Crespos', category: 'Cosméticos' },
        { name: 'Perfume Feminino', category: 'Cosméticos' },
        { name: 'Perfume Masculino', category: 'Cosméticos' },
        { name: 'Perfume', category: 'Cosméticos' },
        { name: 'Bolsa', category: 'Acessórios' },
        { name: 'Brinco', category: 'Acessórios' },
        { name: 'Colar', category: 'Acessórios' },
        { name: 'Pulseira', category: 'Acessórios' },
        { name: 'Relógio', category: 'Acessórios' },
        { name: 'Cinto', category: 'Acessórios' },
        { name: 'Óculos de Sol', category: 'Acessórios' },
        { name: 'Cachecol', category: 'Acessórios' },
        { name: 'Chapéu', category: 'Acessórios' },
        { name: 'Cabelo', category: 'Acessórios' },
        { name: 'Boné', category: 'Acessórios' },
        { name: 'Meias', category: 'Acessórios' },
        { name: 'Coroa', category: 'Acessórios' },
        { name: 'Tiara', category: 'Acessórios' },
        { name: 'Peruca', category: 'Acessórios' },
        { name: 'Faixa de Cabelo', category: 'Acessórios' },
        { name: 'Bolsinha', category: 'Acessórios' },
        { name: 'Carteira', category: 'Acessórios' },
        { name: 'Capa de Celular', category: 'Acessórios' },
        { name: 'Chaveiro', category: 'Acessórios' },
        { name: 'Porta-Retrato', category: 'Acessórios' },
        { name: 'Caneta Personalizada', category: 'Acessórios' },
        { name: 'Luvas', category: 'Acessórios' },
        { name: 'Creme para Acne Oleosidade', category: 'Cosméticos' },
        { name: 'Creme para Acne Secura', category: 'Cosméticos' },
        { name: 'Creme para Acne Desidratação', category: 'Cosméticos' },
        { name: 'Creme para Acne Desconforto', category: 'Cosméticos' },
        { name: 'Creme para Acne Coceira', category: 'Cosméticos' },
        { name: 'Creme para Acne Queimação', category: 'Cosméticos' },
        { name: 'Creme para Acne Ardência', category: 'Cosméticos' },
        { name: 'Creme para Acne Formigamento', category: 'Cosméticos' },
        { name: 'Creme para Acne Repuxamento', category: 'Cosméticos' },
        { name: 'Creme para Acne Ressecamento', category: 'Cosméticos' },
        { name: 'Creme para Acne Descamação', category: 'Cosméticos' },
        { name: 'Creme para Acne Vermelhidão Persistente', category: 'Cosméticos' },
        { name: 'Creme para Acne Manchas Persistentes', category: 'Cosméticos' },
        { name: 'Creme para Acne Cicatrizes Persistentes', category: 'Cosméticos' },
        { name: 'Creme para Acne Hiperpigmentação Persistente', category: 'Cosméticos' },
        { name: 'Creme para Acne Hipopigmentação Persistente', category: 'Cosméticos' }

        // Add more products as needed
    ];

    const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    // Remove existing search results if any
    document.querySelector('.search-results')?.remove();

    // Create a new search results container
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchResults.innerHTML = '<h3>Resultados da Busca:</h3>';

    if (results.length > 0) {
        results.forEach(product => {
            const productItem = document.createElement('h5');
            productItem.textContent = `Produto: ${product.name} - Categoria: ${product.category}`;
            searchResults.appendChild(productItem);
        });
    } else {
        const noResults = document.createElement('h5');
        noResults.textContent = 'Nenhum produto encontrado.';
        searchResults.appendChild(noResults);
    }

    document.body.appendChild(searchResults);
}
// Consolidated cart functionality
let cart = [];

// Generic function to add items to the cart
function addToCart(product, price) {
    const existingProduct = cart.find(item => item.name === product);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: product, quantity: 1, price });
    }
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Quantidade: ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.quantity * item.price;
    });

    totalPrice.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.querySelector('.cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}
// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}
// Function to handle checkout
async function checkout() {
    if (cart.length === 0) {
        alert('O carrinho está vazio!');
    } else {
        const email = prompt('Digite seu email para receber a fatura:');
        if (email) {
            const invoice = cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                total: item.quantity * item.price
            }));
            const totalAmount = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

            try {
                const response = await fetch('https://Leonilde-pimentel-lojavirtual.com/0d85f104362d3922fd35a3c0c1ad621d1d3d63053ad209812c9ca8a765bb563af3d96c6608a30841fe2ae5197feba26d/enviar-fatura', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, invoice, totalAmount })
                });
                const data = await response.json();
                if (data.success) {
                    alert('Compra finalizada com sucesso! A fatura foi enviada para o seu email.');
                    clearCart();
                } else {
                    alert('Erro ao enviar a fatura.');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao conectar ao servidor.');
            }
        } else {
            alert('Por favor, insira um email válido.');
        }
    }
}
function openCart() {
        document.getElementById('cart').style.display = 'block';
    }
function closeCart() {
        document.getElementById('cart').style.display = 'none';
    };
// Example usage for adding different products
document.querySelector('.add-product1')?.addEventListener('click', () => addToCart('Produto 1', 10500));
document.querySelector('.add-product2')?.addEventListener('click', () => addToCart('Produto 2', 5500));
document.querySelector('.add-product3')?.addEventListener('click', () => addToCart('Produto 3', 9000));
document.querySelector('.add-product4')?.addEventListener('click', () => addToCart('Produto 4', 11500));

// Function to handle navigation functionality
function openNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "250px";
    } else {
        console.error('Sidenav element not found.');
    }
}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "0";
    } else {
        console.error('Sidenav element not found.');
    }
};

// Function to handle the subscription functionality
async function subscribe() {
    const email = prompt('Digite seu email para se inscrever:');
    if (email) {
        try {
            const response = await fetch('https://seu-servidor.com/api/inscrever', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            if (data.success) {
                alert('Inscrição salva com sucesso!');
            } else {
                alert('Erro ao salvar inscrição.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar ao servidor.');
        }
    } else {
        alert('Inscrição cancelada. Por favor, insira um email válido.');
    }
};

// Function to handle the contact form functionality
async function contact() {
    const name = prompt('Digite seu nome:');
    const email = prompt('Digite seu email:');
    const message = prompt('Digite sua mensagem:');
    const phone = prompt('Digite seu número de telefone:');
    if (name && email && message && phone) {
        // Validate email format
        try {
            const response = await fetch('https://seu-servidor.com/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message, phone })
            });
            const data = await response.json();
            if (data.success) {
                alert('Mensagem enviada com sucesso!');
            } else {
                alert('Erro ao enviar mensagem.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar ao servidor.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
};
// Function to handle user login
async function login() {
    const email = prompt('Digite seu email:');
    const password = prompt('Digite sua senha:');
    if (email && password) {
        try {
            const response = await fetch('https://seu-servidor.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.success) {
                alert('Login realizado com sucesso!');
                // Save user session or token if needed
                sessionStorage.setItem('userToken', data.token);
            } else {
                alert('Erro ao realizar login. Verifique suas credenciais.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar ao servidor.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
// Example usage for login button
document.querySelector('.login-button')?.addEventListener('click', login);

// Function to toggle modal visibility and update button text
function toggleModal() {
    const modal = document.getElementById("myModal");
    const modalButton = document.querySelector('.modal-button');
    if (modal && modalButton) {
        if (modal.style.display === "block") {
            modal.style.display = "none";
            modalButton.textContent = "Abrir Promoção";
        } else {
            modal.style.display = "block";
            modalButton.textContent = "Fechar Promoção";
        }
    } else {
        console.error('Modal or button element not found.');
    }
}

// Update modal button event listener to use toggleModal
document.querySelector('.modal-button')?.addEventListener('click', toggleModal);

function openModal() {
                document.getElementById('modal').style.display = 'block';
            }

            function closeModal() {
                document.getElementById('modal').style.display = 'none';
            }

            // Exemplo: Abrir o modal automaticamente ao carregar a página
            window.onload = function() {
                openModal();
            };