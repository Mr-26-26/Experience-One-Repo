<!DOCTYPE html>
<html lang="pt-BR">
  
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="language" content="en-US, en-GB">
        <meta name="language" content="pt-AO, pt-PT">
        <meta name="language" content="Portuguese (Angola)">
        <meta name="language" content="pt-BR, pt-PT">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Compre roupas, sapatos, cosméticos e acessórios de alta qualidade na nossa loja online. Aproveite promoções imperdíveis!">
        <meta name="keywords" content="loja online, roupas, sapatos, cosméticos, acessórios, promoções, qualidade">
        <meta name="author" content="Leonilde Pimentel">
        <meta name="author" content="Lizzie burb">
        <meta name="robots" content="index, follow">
        <title>Loja-Virtual</title>
        <link rel="icon" type="image/x-icon" href="Image/favicon.jpg" class="favicon">
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
         integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM8d7xj1z5l5e5e5e5e5e5e5e5e5e5e5e5e5" crossorigin="anonymous">
        <script src="Javascript.js" defer></script>
    </head>
<body>
    <header>
        <nav>
            <div class="logo">
                <a href="LeonildePimentel_Galeria.html" target=" _blank">
                    <img class="logo" src="Image/Fashion2-Logo.png" alt="Logo da Loja">
                </a>
            </div>
            <h1>Cosmeticos & Vestuários</h1>
            <section class="cart1">
                <div class="cart-icon" id="cart-icon" onclick="openCart()">
                    <img src="Image/cart-icon.jpg" alt="Ícone do Carrinho" class="cart-image">
                    <span class="cart-count">0</span>
                </div>
                </section>
                <section class="cart2">
                <div class="cart-display" id="cart">
                    <h3>Carrinho de Compras</h3>
                    <ul id="cart-items"></ul>
                    <p>Total: <span id="total-price">0</span> AOA</p>
                    <button onclick="checkout()">Finalizar Compra</button>
                    <button onclick="clearCart()">Limpar Carrinho</button>
                    <button onclick="closeCart()">Fechar</button>
                    <h6 id="cart-message">Ligar para Entregador: 936484772</h6>
                </div>
            </section>  
            </div>
                <ul class="nav-links">
                    <li><a href="#contact">Mundo</a></li>
                <li><a href="Roupas-Universais.html" target="_blank">Roupas</a></li>
                <li><a href="Sapato-Universais.html" target="_blank">Sapatos</a></li>
                <li><a href="Cosmeticos-Universais.html" target="_blank">Cosméticos</a></li>
                <li><a href="Acessorios-Universais.html">Acessorios</a></li>
            </ul>
            <div class="search-bar">
                <input class="linp" type="text" placeholder="Buscar produtos..." id="search-input">
                <button class="linp" onclick="searchProducts()" aria-label="Buscar Produtos">Buscar</button>
            </div>
            <section class="botao">
                <div class="auth-buttons">
                    <button onclick="subscribe()">Inscrever-se</button>
                    <button onclick="login()">Entrar</button>
                </div>
            </section>
            <div class="sidebar3">
                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <a href="Sobre nós.html" target="_blank">Sobre Nós</a>
                    <a href="Servicos.html" target="_blank">Serviços</a>
                    <a href="#">Clientes</a>
                    <a href="#">Contato</a>
                    <a href="Privacidade & termos.html" target="_blank">Privacidade e Termos</a>
                    <a href="#">Apoio ao Cliente</a>
                    <a href="Politica de Devolucao.html" target="">Política de Devolução</a>
                    <a href="Politica de Entrega.html" target="_blank">Política de Entrega</a>
                </div>
                <span style="font-size: 15px; cursor: pointer;" onclick="openNav()">&#9776; MENU</span>
            </div>
        </nav>
    </header>
    <main>
        <section class="banner">
            <h1> </h1>
            <img src="Image/banner.jpg" alt="Banner da Loja" class="banner-image">
            <div class="banner-text">
                <h2>Bem-vindo à nossa loja online você pode Comprar a partir de casa!</h2>
            </div>
        </section>      
        <section class="destaque2">
            <ul id="cart-items" style="display: flex; flex-wrap: wrap; gap: 20px; list-style: none; padding: 0;">
            <li class="container3" style="flex: 1; max-width: 200px;">
                <img src="Image/Worls18-2025.jpg" alt="Novo" class="image3" style="width: 100%; height: auto;">
                <button class="overlay" onclick="addToCart('Camisa Africana', 11500)" style="width: 100%;">11.500 Kzs - Camisa Africana <br>Adicionar ao Carrinho</button>
            </li>
            <li class="container3" style="flex: 1; max-width: 200px;">
                <img src="Image/Worls18-2025.jpg" alt="Novo" class="image3" style="width: 100%; height: auto;">
                <button class="overlay" onclick="addToCart('Sapato Homem', 5500)" style="width: 100%;">5.500 Kzs - Sapato Homem<br>Adicionar ao Carrinho</button>
            </li>
            <li class="container3" style="flex: 1; max-width: 200px;">
                <img src="Image/Worls18-2025.jpg" alt="Novo" class="image3" style="width: 100%; height: auto;">
                <button class="overlay" onclick="addToCart('Casaco Masculino neo', 10500)" style="width: 100%;">10.500 Kzs - Casaco Masculino neo<br>Adicionar ao Carrinho</button>
            </li>
            <li class="container3" style="flex: 1; max-width: 200px;">
                <img src="Image/Worls18-2025.jpg" alt="Novo" class="image3" style="width: 100%; height: auto;">
                <button class="overlay" onclick="addToCart('Bolsa da Shein', 9000)" style="width: 100%;">9.000 Kzs - Bolsa da Shein<br>Adicionar ao Carrinho</button>
            </li>
            <li class="container3" style="flex: 1; max-width: 200px;">
                <img src="Image/Worls18-2025.jpg" alt="Novo" class="image3" style="width: 100%; height: auto;">
                <button class="overlay" onclick="addToCart('Bolsa da Shein', 9000)" style="width: 100%;">9.000 Kzs - Bolsa da Shein<br>Adicionar ao Carrinho</button>
            </li>
            </ul>
        </section>

        <div >
            <p class="promotion"> Obrigado por visitar nossa loja online! Esperamos que você tenha encontrado o que estava procurando.
                <br/>Se precisar de ajuda, não hesite em entrar em contato conosco. Estamos aqui para ajudar!</p>
            <p class="promotion">Se você tiver alguma dúvida ou precisar de assistência, entre em contato conosco através do nosso e-mail ou telefone.
                <br/>Nossa equipe está pronta para ajudar!</p> 

            </p>
        </div>
    </main>
    <footer>
        <div class="payment-options">
            <p>&copy; 2025 Todos os direitos reservados</p>
            <h4>Opções de Pagamento</h4>
            <img src="Image/credit-card.png" alt="Cash" class="image0">
            <img src="Image/multicaixa.png" alt="Express" class="image0">
            <img src="Image/Tpa.png" alt="Tpa" class="image0">
            <p>Telefone: 945530028</p>
            <p>Email: leonildepimentel2@gmail.com</p>
            <p>Horário de Funcionamento: 7h-18h</p>
        </div>
        <div class="social-icons">
            <div class="footer-social">
                <a href=" https://www.facebook.com/profile.php?id=61575511993275" ><img src="Image/f_logo_RGB-Blue_1024.png" alt="Facebook" class="image0"></a>
                <a href="#" ><img src="Image/X-logo.png" alt="twitter"  class="image0"></a>
                <a href="https://wa.me/message/LHL6WBZDZTGAJ1" ><img src="Image/whatsapp.png" alt="WhatsApp" class="image0"></a>
                <a href="https://www.instagram.com/leo.pimentel_21?igsh=YzljYTk1ODg3Zg==" ><img src="Image/instagram-logo.png" alt="Intagram" class="image0"></a>
                <a href="https://vm.tiktok.com/ZMBKN3bTE/" ><img src="Image/black-tiktok-logo.jpg " alt="tik-tok" class="image0"></a>
            </div>
            <div class="search-results"> 
                <h3>Resultados da Busca: 0 </h3>
                <h5 class="search-results"> </h5>
            </div>
    </footer>
</body>
</html>
