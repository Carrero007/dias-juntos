// Função para gerar corações caindo
function gerarCorações() {
    const heartContainer = document.body; // Onde os corações serão gerados
    for (let i = 0; i < 5; i++) { // Gera 5 corações por vez
        const heart = document.createElement("span");
        heart.classList.add("heart");

        // Posicionamento aleatório
        const leftPosition = Math.random() * 100; // Posição aleatória entre 0 e 100%
        heart.style.left = `${leftPosition}vw`; // A posição da esquerda será em % da largura da tela

        // Adiciona o coração ao corpo da página
        heartContainer.appendChild(heart);

        // Remove o coração depois que ele terminou a animação
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}

// Gerar corações a cada 1 segundo
setInterval(gerarCorações, 1000);

// Senha única para acessar o site
const senhaCorreta = "Gabriela e 26/10/2024";

// Verificar login
const loginForm = document.getElementById("login-form");
const loginContainer = document.getElementById("login-container");
const conteudo = document.getElementById("conteudo");
const erroLogin = document.getElementById("erro-login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const senha = document.getElementById("senha").value;
  if (senha === senhaCorreta) {
    loginContainer.style.display = "none";
    conteudo.style.display = "block";
  } else {
    erroLogin.style.display = "block";
  }
});

// Lógica do carrossel
const imagens = document.querySelectorAll(".carrossel-img");
let indexAtual = 0;

function trocarImagem() {
  // Esconder todas as imagens
  imagens.forEach((img) => {
    img.style.display = "none";
  });

  // Mostrar a imagem atual
  imagens[indexAtual].style.display = "block";

  // Atualizar o índice da imagem atual
  indexAtual = (indexAtual + 1) % imagens.length;
}

setInterval(trocarImagem, 6000); // Troca de imagem a cada 6 segundos

// Define a data de início do namoro
const namoroData = new Date('2024-03-06T00:00:00');

// Função para calcular e exibir o tempo restante
function atualizarTempo() {
  // Obter a data e hora atuais
  const agora = new Date();

  // Calcular a diferença em milissegundos
  const diferenca = agora - namoroData;

  if (diferenca < 0) {
    document.getElementById('resultado').innerText = 'A data de início do namoro ainda não chegou!';
    return;
  }

  // Calcular meses, dias, horas, minutos e segundos
  const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30.44));
  const diasRestantes = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById('resultado').innerText = `Já passaram ${meses} meses, ${diasRestantes} dias, ${horas} horas e ${segundos} segundos desde que nos falamos pela primeira vez.`;
}

// Atualizar o tempo a cada segundo
setInterval(atualizarTempo, 1000);

// Atualizar o tempo imediatamente ao carregar a página
atualizarTempo();
