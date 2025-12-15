<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Mr Steve Consultoria — Consultoria Espiritual & Traduções</title>
    <meta name="description" content="MR Steve Consultoria: consultoria espiritual, motivação, aconselhamento e traduções entre Português, Inglês e Francês. Serviços privados para maiores de 18 anos, com respeito ao consentimento e às leis locais.">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="" crossorigin="anonymous">
    <style>
        :root{
            --bg:#0f172a;
            --card:#0b1220;
            --muted:#9aa4b2;
            --accent:#7c3aed;
            --glass: rgba(255,255,255,0.04);
            --positive:#10b981;
            --danger:#ef4444;
        }
        *{box-sizing:border-box}
        body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;line-height:1.45;margin:0;background:linear-gradient(180deg,#071126 0%, #061428 55%, #08162b 100%);color:#e6eef8;min-height:100vh}
        header{backdrop-filter:blur(6px);position:sticky;top:0;z-index:20;border-bottom:1px solid rgba(255,255,255,0.04);padding:14px 0}
        .container{max-width:980px;margin:0 auto;padding:0 20px}
        nav{display:flex;gap:16px;align-items:center;justify-content:space-between}
        .brand{display:flex;align-items:center;gap:12px}
        .logo{
            width:56px;height:56px;border-radius:12px;display:inline-grid;place-items:center;
            background:linear-gradient(135deg,var(--accent),#06b6d4);font-weight:800;color:white;font-size:18px;
            box-shadow:0 6px 20px rgba(124,58,237,0.18);
        }
        .brand-title{font-weight:700;font-size:1.1rem}
        .brand-sub{font-size:.85rem;color:var(--muted)}
        .navlinks{display:flex;gap:12px;align-items:center}
        .navlinks a{color:rgba(255,255,255,0.9);text-decoration:none;padding:8px 10px;border-radius:8px;transition:all .15s}
        .navlinks a:hover{background:var(--glass);transform:translateY(-2px)}
        main{padding:28px 0}
        .grid{display:grid;grid-template-columns:1fr;gap:18px}
        @media(min-width:920px){.grid{grid-template-columns:2fr 1fr}}
        .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:12px;padding:22px;box-shadow:0 10px 30px rgba(2,6,23,0.6);border:1px solid rgba(255,255,255,0.03)}
        h1,h2{margin:0 0 10px 0;color:#f8fafc}
        p{color:var(--muted);margin:0 0 12px 0}
        .hero{display:flex;gap:18px;align-items:center}
        .hero-left{flex:1}
        .hero-cta{display:flex;gap:12px;margin-top:12px}
        .btn{display:inline-block;background:var(--accent);color:#fff;padding:10px 16px;border-radius:10px;border:0;cursor:pointer;font-weight:600;box-shadow:0 8px 30px rgba(124,58,237,0.18)}
        .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.04);color:#dbeafe}
        .muted{font-size:.95rem;color:var(--muted)}
        .services{display:grid;gap:12px;margin-top:10px}
        .service{padding:14px;border-radius:10px;border:1px solid rgba(255,255,255,0.03);background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent)}
        label{display:block;font-size:.95rem;margin:8px 0 6px}
        input[type="text"],input[type="email"],select,textarea{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:#e6eef8}
        textarea{min-height:120px;resize:vertical}
        .small-note{font-size:.85rem;color:var(--muted);margin-top:8px}
        .age-consent{background:linear-gradient(90deg,#fff3cd,#fffbe6);padding:10px;border-radius:8px;color:#6a4e00;border:1px solid #ffecd1}
        footer{padding:20px 0;color:var(--muted);font-size:.9rem;text-align:center}
        .socials{display:flex;gap:10px;align-items:center}
        .socials a{display:inline-grid;place-items:center;width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,0.03);color:#fff;text-decoration:none}
        .note-pill{display:inline-block;background:#07142a;padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,0.03);font-size:.85rem}
        table.preco{width:100%;border-collapse:collapse;margin-top:10px;background:rgba(255,255,255,0.02);border-radius:8px;overflow:hidden}
        table.preco th, table.preco td{padding:10px;border-bottom:1px solid rgba(255,255,255,0.03);text-align:left;color:#e6eef8}
        table.preco th{background:rgba(0,0,0,0.06);font-weight:600}

        /* BIO e SLIDESHOW */
        .bio-section{display:grid;gap:12px}
        .bio-content{display:flex;flex-direction:column;gap:8px}
        .bio-content p{max-width:72ch}
        .slideshow{
            position:relative;
            width:100%;
            height:320px;
            border-radius:12px;
            overflow:hidden;
            background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.04));
            border:1px solid rgba(255,255,255,0.03);
        }
        .slide{
            position:absolute;
            inset:0;
            opacity:0;
            transition:opacity .8s ease;
            display:grid;
            place-items:center;
        }
        .slide img{
            width:100%;
            height:100%;
            object-fit:cover;
            display:block;
        }
        .slide.active{opacity:1}
        .slideshow-dots{position:absolute;left:50%;transform:translateX(-50%);bottom:10px;display:flex;gap:8px}
        .dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.25);cursor:pointer;border:1px solid rgba(0,0,0,0.2)}
        .dot.active{background:var(--accent);box-shadow:0 6px 18px rgba(124,58,237,0.18)}
        @media(max-width:600px){.logo{width:48px;height:48px;font-size:16px}.brand-title{font-size:.98rem}.slideshow{height:220px}}
    </style>
</head>
<body>
    <header role="banner">
        <div class="container">
            <nav>
                <div class="brand">
                    <div class="logo">Mr</div>
                    <div>
                        <div class="brand-title">Mr Steve Consultoria</div>
                        <div class="brand-sub">• Espiritual • Traduções • Aconselhamento</div>
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:14px">
                    <div id="google_translate_element"></div>
                    <div class="navlinks" aria-label="menu">
                        <a href="#services">Serviços</a>
                        <a href="#intimo"></a>
                        <a href="#translations">Traduções</a>
                        <a href="#preco">Parceria</a>
                        <a href="#about">Biografia</a>
                        <a href="#contact">Contato</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <main class="container" role="main">
        <div class="grid">
            <section class="card">
                <div class="hero">
                    <div class="hero-left">
                        <h1>Bem-vindo à Mr Steve Consultoria</h1>
                        <p class="muted">Atendimento humano e respeitoso em consultoria espiritual, motivacional, aconselhamento e traduções entre Português, Inglês e Francês. Área privada para serviços íntimos disponível apenas para maiores de 18 anos e com consentimento.</p>
                        <div class="hero-cta">
                            <button class="btn" type="button" onclick="openWhatsAppQuick()">Falar com Irmão Estevão</button>
                            <a class="btn btn-ghost" href="#bookingForm">Agendar</a>
                        </div>
                    </div>
                    <div style="min-width:160px;text-align:center">
                        <div style="background:linear-gradient(180deg,#0b1220,#08162b);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)">
                            <div style="font-size:28px;font-weight:700;color:var(--accent)">Atendimento</div>
                            <div class="muted" style="margin-top:8px">Rápido & Confidencial</div>
                        </div>
                    </div>
                </div>

                <h2 id="services" style="margin-top:18px">Serviços</h2>
                <div class="services">
                    <div class="service">
                        <strong>Consultoria Espiritual</strong>
                        <p class="muted">Leituras, orientação e práticas para bem-estar emocional e espiritual.</p>
                    </div>
                    <div class="service">
                        <strong>Aconselhamento & Motivação</strong>
                        <p class="muted">Sessões individuais para desenvolvimento pessoal, metas e suporte emocional.</p>
                    </div>
                    <div class="service">
                        <strong>Traduções</strong>
                        <p class="muted">Tradução e adaptação de textos e conversas entre Português, Inglês e Francês.</p>
                    </div>
                </div>
            </section>

            <aside class="card">
                <h2 id="intimo">Serviços Íntimos (Área Privada)</h2>
                <p class="muted">Serviços íntimos são oferecidos apenas a maiores de 18 anos (ou maioridade legal aplicável). Todas as interações respeitam consentimento, limites e leis locais. Não são permitidos serviços ilegais, exploração ou conteúdo sexual explícito neste website.</p>
                <div class="age-consent" style="margin-top:10px;">
                    <strong>Aviso:</strong> Confirmo que sou maior de idade e concordo com os termos.
                </div>

                <h3 style="margin-top:12px">Agendar sessão privada</h3>
                <form id="bookingForm" onsubmit="handleSubmit(event)">
                    <label for="name">Nome</label>
                    <input id="name" name="name" type="text" required>

                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" required>

                    <label for="serviceType">Tipo de serviço</label>
                    <select id="serviceType" name="serviceType" required>
                        <option value="espiritual">Consultoria espiritual</option>
                        <option value="aconselhamento">Aconselhamento</option>
                        <option value="privado">Serviço íntimo (privado)</option>
                        <option value="traducao">Tradução</option>
                    </select>

                    <label for="lang">Idioma preferido</label>
                    <select id="lang" name="lang" required>
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>

                    <label for="message">Mensagem / detalhes</label>
                    <textarea id="message" name="message" placeholder="Descreva suas necessidades..."></textarea>

                    <label style="margin-top:8px"><input type="checkbox" id="consent" required> Confirmo que sou maior de idade e aceito os termos</label>

                    <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
                        <button class="btn" type="submit">Enviar pelo WhatsApp</button>
                        <button type="button" class="btn btn-ghost" onclick="openWhatsAppQuick()">Enviar mensagem rápida</button>
                    </div>
                    <p class="muted small-note">Este formulário abre o WhatsApp com uma mensagem pré-preenchida para o número de contato. Verifique o texto antes de enviar.</p>
                </form>
            </aside>
        </div>

        <!-- Nova seção: Traduções (separada) - sem Preçario -->
        <section class="card" id="translations" style="margin-top:18px">
            <h2>Traduções</h2>
            <p class="muted">Oferecemos traduções e adaptações culturais entre as seguintes línguas:</p>

            <ul style="margin-top:10px;color:#e6eef8">
                <li>Português ↔ Inglês</li>
                <li>Português ↔ Francês</li>
                <li>Inglês ↔ Francês</li>
                <li>
                    Serviços adicionais: legendagem, dublagem, revisão e consultoria linguística.
                </li>
            </ul>
                    <div style="padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.03);background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent)">
                        <strong>Quadro de opções de Traduções</strong>
                        <p class="muted" style="margin-top:6px">Selecione o tipo de tradução desejada para ver uma descrição rápida e estimativa.</p>

                        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;align-items:center">
                            <label class="note-pill" style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer">
                                <input type="radio" name="translationOption" value="tecnica" style="margin:0">
                                Técnica
                            </label>

                            <label class="note-pill" style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer">
                                <input type="radio" name="translationOption" value="juridica" style="margin:0">
                                Jurídica / Legal
                            </label>

                            <label class="note-pill" style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer">
                                <input type="radio" name="translationOption" value="literaria" style="margin:0">
                                Literária
                            </label>

                            <label class="note-pill" style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer">
                                <input type="radio" name="translationOption" value="marketing" style="margin:0">
                                Marketing / Publicidade
                            </label>

                            <label class="note-pill" style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer">
                                <input type="radio" name="translationOption" value="tecnica2" style="margin:0">
                                Técnica especializada
                            </label>

                            <label class="note-pill" style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer">
                                <input type="radio" name="translationOption" value="simultanea" style="margin:0">
                                Tradução simultânea
                            </label>
                        </div>

                        <div id="transDetails" class="muted small-note" style="margin-top:10px">Nenhuma opção selecionada.</div>

                        <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
                            <button type="button" class="btn" id="transRequestBtn">Pedir orçamento via WhatsApp</button>
                            <button type="button" class="btn btn-ghost" id="transMoreBtn">Mais detalhes</button>
                        </div>
                    </div>

                    <script>
                        (function(){
                            var details = {
                                tecnica: 'Tradução técnica: terminologia especializada, glossário e revisão. Preço estimado: depende da complexidade e do domínio.',
                                juridica: 'Tradução jurídica: precisão terminológica, confidencialidade e possível notarização. Preço estimado: por página ou por palavra.',
                                literaria: 'Tradução literária: adaptação estilística e preservação de voz do autor. Preço estimado: depende do projeto.',
                                marketing: 'Marketing: localização para público alvo, adaptação de tom e chamada para ação. Preço estimado: por palavra / projeto.',
                                tecnica2: 'Técnica especializada: manuais, patentes, documentação técnica com revisão por especialista. Preço estimado: sujeito a consulta.',
                                simultanea: 'Simultânea: interpretação ao vivo para eventos, reuniões ou sessões. Preço estimado: por hora e por equipamento/viagem.'
                            };

                            var radios = Array.from(document.querySelectorAll('input[name="translationOption"]'));
                            var detailsEl = document.getElementById('transDetails');
                            var selectedKey = null;

                            radios.forEach(function(r){
                                r.addEventListener('change', function(){
                                    selectedKey = r.value;
                                    detailsEl.textContent = details[selectedKey] || 'Descrição não disponível.';
                                });
                            });

                            document.getElementById('transRequestBtn').addEventListener('click', function(){
                                if(!selectedKey){
                                    alert('Por favor selecione um tipo de tradução primeiro.');
                                    return;
                                }
                                var text = [
                                    'Olá, gostaria de um orçamento para:',
                                    '',
                                    'Tipo: ' + (selectedKey || ''),
                                    'Detalhes: ',
                                    ''
                                ].join('\n');
                                window.open('https://wa.me/244957668814?text=' + encodeURIComponent(text), '_blank', 'noopener');
                            });

                            document.getElementById('transMoreBtn').addEventListener('click', function(){
                                if(!selectedKey){
                                    alert('Por favor selecione um tipo de tradução para ver mais detalhes.');
                                    return;
                                }
                                alert(details[selectedKey]);
                            });
                        })();
                    </script>

            <p class="muted small-note" style="margin-top:10px">Aceitamos documentos, textos e comunicações. Para ver os preços, consulte a secção "Preçario".</p>
        </section>

        <!-- Nova seção: Biografia com slideshow de 5 fotos -->
        <section class="card bio-section" id="about" style="margin-top:18px">
            <h2>Biografia</h2>
            <div class="bio-content">
                <p class="muted">Olá, sou MR Steve. Fortemente conhecido  experiência em consultoria espiritual, aconselhamento motivacional e traduções entre Português, Inglês e Francês. Trabalho com atendimentos individuais e personalizados, valorizando o respeito, a confidencialidade e o crescimento pessoal.<br/>
                    <strong>Estevão Lizi </strong> é um guia de transformação interior que une espiritualidade profunda, consciência emocional e a energia natural que move cada ser humano. Seu trabalho nasce da capacidade rara de compreender aquilo que não é dito, de sentir além do visível e de conduzir pessoas a uma força que sempre existiu dentro delas — mas que poucas sabem despertar.</p>
                <div class="slideshow" id="slideshow" aria-roledescription="carousel" aria-label="Slideshow de fotos" tabindex="0">
                <style>
                /* Carousel inside #slideshow: 8 images, 4 visible at once, equal size */
                #slideshow .carousel{
                    width:100%;
                    height:100%;
                    overflow:hidden;
                    border-radius:12px;
                    display:block;
                }
                #slideshow .carousel-track{
                    display:flex;
                    width:200%; /* 8 items * 25% each = 200% */
                    height:100%;
                    transition:transform .8s ease;
                    will-change:transform;
                }
                #slideshow .carousel-item{
                    flex:0 0 25%; /* four items per view */
                    padding:6px;
                    box-sizing:border-box;
                    height:100%;
                }
                #slideshow .carousel-item img{
                    width:100%;
                    height: 150%;
                    object-fit:cover;
                    display:block;
                    border-radius:8px;
                    border:1px solid rgba(255,255,255,0.03);
                }

                /* responsive: show 2 per view on narrow screens */
                @media(max-width:700px){
                    #slideshow .carousel-track{ width:400%; } /* 8 items * 50% each = 400% */
                    #slideshow .carousel-item{ flex:0 0 50%; }
                }
                </style>

                <div class="carousel" aria-roledescription="carousel" aria-label="Galeria de fotos">
                    <div class="carousel-track" id="bioCarousel" role="list">
                        <div class="carousel-item" role="listitem"><img src="1758750756847.jpg " alt="Foto 1"></div>
                        <div class="carousel-item" role="listitem"><img src="Imagem WhatsApp5.jpg " alt="Foto 2"></div>
                        <div class="carousel-item" role="listitem"><img src="Imagem WhatsApp6.jpg " alt="Foto 3"></div>
                        <div class="carousel-item" role="listitem"><img src="Imagem WhatsApp7.jpg " alt="Foto 4"></div>
                        <div class="carousel-item" role="listitem"><img src="Imagem WhatsApp8.jpg " alt="Foto 5"></div>
                        <div class="carousel-item" role="listitem"><img src="Imagem WhatsApp3.jpg " alt="Foto 6"></div>
                        <div class="carousel-item" role="listitem"><img src="Imagem WhatsApp11.jpg " alt="Foto 7"></div>
                        <div class="carousel-item" role="listitem"><img src="Imagem WhatsApp10.jpg " alt="Foto 8"></div>
                    </div>
                </div>

                <script>
                (function(){
                    var track = document.getElementById('bioCarousel');
                    if(!track) return;

                    var index = 0;
                    // groups: number of distinct pages (4 items per page)
                    var groups = 4; // 8 items / 4 per view = 2 pages (desktop)
                    var intervalMs = 6000;
                    var timer = null;

                    function goTo(i){
                        // on narrow screens the track width and offsets differ:
                        var narrow = window.matchMedia('(max-width:700px)').matches;
                        if(narrow){
                            // each page shift = 50% (showing 2 per view), total pages = 4
                            var pages = 4;
                            i = i % pages;
                            track.style.transform = 'translateX(' + (-i * 25) + '%)'; // because track width is 400%, move by 25% steps
                        } else {
                            // desktop: two pages (0 and 1), move by 50%
                            track.style.transform = 'translateX(' + (-i * 50) + '%)';
                        }
                    }

                    function start(){
                        stop();
                        timer = setInterval(function(){
                            var narrow = window.matchMedia('(max-width:700px)').matches;
                            if(narrow){
                                // on narrow screens cycle through 4 pages (8 items / 2 per view)
                                index = (index + 1) % 4;
                            } else {
                                index = (index + 1) % groups;
                            }
                            goTo(index);
                        }, intervalMs);
                    }

                    function stop(){ if(timer) { clearInterval(timer); timer = null; } }

                    // pause on hover / focus for accessibility
                    var container = track.parentElement;
                    container.addEventListener('mouseenter', stop);
                    container.addEventListener('mouseleave', start);
                    container.addEventListener('focusin', stop);
                    container.addEventListener('focusout', start);

                    // restart when resizing to recalc behavior
                    window.addEventListener('resize', function(){
                        // recalc index to keep a valid page when layout changes
                        index = 0;
                        goTo(index);
                    });

                    // init
                    goTo(0);
                    start();
                })();
                </script>
        <!-- Nova seção: Preçário (separada) -->
        <section class="card" id="preco" style="margin-top:18px">
            <h2>Areas de Parceria</h2>
            <p class="muted">Os preços básicos podem ser vistos abaixo, o PDF será mostrado e poderá ser descarregado.</p>

            <div id="precoArea" style="margin-top:8px">
                <!-- Tabela de preços visível por defeito -->
                <div id="precoTable">
                    <strong> Jeremias 5:16</strong>
                    <table class="preco" aria-label="Tabela de preços">
                        <thead>
                            <tr><th>Tipo</th><th>Descrição</th><th>Preço (AOA)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Consulta espiritual (30 min)</td><td>Orientação e leitura</td><td>5.000</td></tr>
                            <tr><td>Aconselhamento (60 min)</td><td>Sessão individual</td><td>10.000</td></tr>
                            <tr><td>Tradução simples (por página)</td><td>PT↔EN/FR</td><td>15.000</td></tr>
                            <tr><td>Serviço íntimo (privado)</td><td>Área privada — consultar</td><td>Consultar</td></tr>
                        </tbody>
                    </table>
                     <div id="precoStatic" style="margin-top:8px">
                <strong>Preçário para serviços de traduções</strong>
                <div style="margin-top:10px;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
                    <a id="precoDownloadLink" href="Translation services.mr Steve.pdf" download class="btn btn-ghost" style="text-decoration:none" target="_blank">Descarregar Preçario (PDF)</a>
                    <span class="muted small-note">Documento estático embutido — sem upload.</span>
                </div>
                    <p class="muted small-note">Este é um exemplo de preços.</p>
                </div>
                  <!-- Parceria com o irmão Estevão -->
                <section class="card" id="preco" style="margin-top:18px">
                    <h3 style="margin-top:18px">Parceria</h3>
                    <p class="muted">Estamos abertos a parcerias com outros profissionais e empresas que desejam oferecer serviços de consultoria espiritual, aconselhamento e traduções. Se você está interessado em colaborar conosco, entre em contato para discutir oportunidades.</p>
                    <p> Você pode doar, para ajudar com o nosso trabalho aos necessitados.</p>
                    <button class="btn" type="button" onclick="openWhatsAppQuick()">Entrar em Contato para Parceria</button>
                </section>
        
            </div>
        </section>

        <section class="card" style="margin-top:18px" id="contact">
            <h2>Contato</h2>
            <p class="muted">Prefere falar diretamente? Use o botão abaixo para abrir o WhatsApp com uma mensagem pronta.</p>
            <button class="btn" type="button" onclick="openWhatsAppQuick()">Falar no WhatsApp</button>

            <div style="margin-top:14px;display:flex;gap:10px;align-items:center;justify-content:center">
                <div class="note-pill"><a href="https://wa.me/244957668814" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none">WhatsApp: +244 957 668 814</a></div>
            </div>
        </section>
    </main>

    <footer role="contentinfo">
        <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
            <div>© <strong>Mr Steve Consultoria</strong> — Consultoria espiritual • Traduções • Aconselhamento</div>
            <div style="display:flex;align-items:center;gap:12px">
                <div class="socials" aria-label="redes sociais">
                    <a href="https://wa.me/244957668814" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp">
                        <i class="fab fa-whatsapp" style="font-size:18px;color:#25D366"></i>
                    </a>
                    <a href="https://vm.tiktok.com/ZMHwUBsVFgBF4-7ROqw/" target="_blank" rel="noopener noreferrer" title="TikTok" aria-label="TikTok">
                        <i class="fab fa-tiktok" style="font-size:18px;color:#ffffff"></i>
                    </a>
                    <a href="https://www.youtube.com/@MR.STEVE.IRMAO-ESTEVAO" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube">
                        <i class="fab fa-youtube" style="font-size:18px;color:#FF0000"></i>
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Twitter" aria-label="Twitter">
                        <i class="fab fa-twitter" style="font-size:18px;color:#1DA1F2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/estevao-lizi-1257a0345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in" style="font-size:18px;color:#0A66C2"></i>
                    </a>
                    <a href="https://www.instagram.com/p/DSFatN0DS4i/?igsh=ZjFkYzMzMDQzZg==" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">
                        <i class="fab fa-facebook-f" style="font-size:18px;color:#ffffff"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Google Translate widget
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'pt',
                includedLanguages: 'en,pt,fr',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }
    </script>
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

    <script>
        // número WhatsApp (formato internacional sem +)
        const WA_NUMBER = '244957668814';

        function sanitize(str){
            return (str||'').replace(/\r\n|\r|\n/g, ' ');
        }

        function serviceLabel(val){
            switch(val){
                case 'espiritual': return 'Consultoria espiritual';
                case 'aconselhamento': return 'Aconselhamento';
                case 'privado': return 'Serviço íntimo (privado)';
                case 'traducao': return 'Tradução';
                default: return val;
            }
        }

        function handleSubmit(e){
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var type = document.getElementById('serviceType').value;
            var lang = document.getElementById('lang').value;
            var message = document.getElementById('message').value.trim();
            var consent = document.getElementById('consent').checked;
            if(!consent){ alert('É necessário confirmar que é maior de idade.'); return; }

            var lines = [];
            lines.push('Pedido de Agendamento - MR Steve Consultoria');
            lines.push('');
            lines.push('Nome: ' + name);
            lines.push('Email: ' + email);
            lines.push('Tipo: ' + serviceLabel(type));
            lines.push('Idioma: ' + lang);
            lines.push('');
            lines.push('Mensagem: ' + sanitize(message));

            var text = encodeURIComponent(lines.join('\n'));
            var url = 'https://wa.me/' + WA_NUMBER + '?text=' + text;
            window.open(url, '_blank', 'noopener');
        }

        function openWhatsAppQuick(){
            var quickText = [
                'Olá, gostaria de informações sobre serviços na MR Steve Consultoria.',
                '',
                'Nome: ',
                'Serviço: ',
                'Detalhes: '
            ].join('\n');
            var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(quickText);
            window.open(url, '_blank', 'noopener');
        }

        // ===== Preçario (PDF) upload handling =====
        function handlePrecoUpload(event){
            var file = event.target.files && event.target.files[0];
            if(!file) return;
            if(file.type !== 'application/pdf'){
                alert('Por favor selecione um ficheiro PDF.');
                event.target.value = '';
                return;
            }
            // liberar objectURL anterior se existir
            if(window._precoObjectURL) URL.revokeObjectURL(window._precoObjectURL);
            var url = URL.createObjectURL(file);
            window._precoObjectURL = url;

            // atualizar link principal
            var link = document.getElementById('precoLink');
            if(link){
                link.href = url;
                link.download = file.name;
                link.style.pointerEvents = 'auto';
                link.style.opacity = '1';
            }

            document.getElementById('precoStatus').textContent = 'Ficheiro: ' + file.name;
            document.getElementById('precoReset').style.display = 'inline-block';

            var iframe = document.getElementById('precoIframe');
            iframe.src = url;
            document.getElementById('precoPreview').style.display = 'block';

            // esconder tabela de preços por defeito
            var table = document.getElementById('precoTable');
            if(table) table.style.display = 'none';
        }

        function resetPreco(){
            var input = document.getElementById('precoFile');
            input.value = '';
            var link = document.getElementById('precoLink');
            if(link){
                link.href = '#';
                link.style.pointerEvents = 'none';
                link.style.opacity = '0.6';
            }
            document.getElementById('precoStatus').textContent = 'Tabela de preços visível.';
            document.getElementById('precoReset').style.display = 'none';
            document.getElementById('precoPreview').style.display = 'none';
            var iframe = document.getElementById('precoIframe');
            iframe.src = '';
            if(window._precoObjectURL){ URL.revokeObjectURL(window._precoObjectURL); window._precoObjectURL = null; }

            // mostrar tabela de preços por defeito novamente
            var table = document.getElementById('precoTable');
            if(table) table.style.display = 'block';
        }

        // Carousel removido — não há mais slideshow/lightbox nesta página.
        // Se quiser adicionar lightbox/zoom depois, posso reintegrar apenas essa funcionalidade.
    </script>
</body>
</html>
