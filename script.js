// ==========================================
// SELECIONANDO OS ELEMENTOS
// ==========================================

const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

// ==========================================
// ENVIO DO FORMULÁRIO
// ==========================================

formulario.addEventListener("submit", function(event){

    // Impede que a página recarregue
    event.preventDefault();

    // Validação do nome
    if(nome.value.trim() === ""){

        alert("Digite seu nome.");
        return;

    }

    // Validação do e-mail
    if(email.value.trim() === ""){

        alert("Digite seu e-mail.");
        return;

    }

    // Verifica se o e-mail é válido
    if(!email.value.includes("@")){

        alert("Digite um e-mail válido.");
        return;

    }

    // Validação da mensagem
    if(mensagem.value.trim() === ""){

        alert("Digite sua mensagem.");
        return;

    }

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso! 🚀");

    // Limpa os campos do formulário
    formulario.reset();

});

// ==========================================
// ROLAGEM SUAVE DO MENU
// ==========================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function(event){

        event.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==========================================
// MENU ATIVO
// ==========================================

const secoes = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop - 120;
        const altura = secao.offsetHeight;

        if(window.scrollY >= topo && window.scrollY < topo + altura){

            secaoAtual = secao.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("ativo");

        if(link.getAttribute("href") === "#" + secaoAtual){

            link.classList.add("ativo");

        }

    });

});

// ==========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==========================================

const elementos = document.querySelectorAll(

    ".card-servico, .card-depoimento, .home-conteudo, .sobre-conteudo, .informacoes-contato, form"

);

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},{

    threshold:0.2

});

elementos.forEach((elemento)=>{

    observer.observe(elemento);

});


 
