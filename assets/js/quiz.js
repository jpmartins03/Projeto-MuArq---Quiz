const questions = [
    {
        // Questão 01
        question: "Quem foram os primeiros habitantes de Mato Grosso do Sul?",
        options: ["índios ceramistas - agricultores", "caçadores - coletores - pescadores", "portugueses navegadores",
            "espanhóis navegadores", "vikings guerreiros navegadores"],
        correct: 1, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/1.png"
        
    },
    {
        // Questão 02
        question: "Um dos aspectos mais notáveis da vida humana no período pré-histórico foram as pinturas nas cavernas. Este tipo de pintura mereceu inúmeros estudos acerca do significado dessa expressão artística. Essa pintura é conhecida como...",
        options: ["Pintura clássica", "Pintura moderna", "Pintura rupestre", "Pintura impressionista", "Pintura gótica"],
        correct: 2, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/2.png"
    },
    {
        // Questão 03 
        // Tem que arrumar
        question: "Qual é o período em que os seres humanos aprenderam as técnicas de lascar rochas portanto, produziram seus instrumentos como lanças, facas, lesmas e pontas de flechas conhecidos como tecnologia lítica.",
        options: ["Idade Antiga","Idade da Pedra Lascada","Idade da Pedra Polida","Idade Média","Idade do Metais"],
        correct: 1, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/3.png"
    },
    {
        // Questão 04
        question: "Assinale a alternativa incorreta:",
        options: ["Os potes de cerâmica indígena serviam para guardar alimentos", "Os potes de cerâmica indígena serviam para cozinhar alimentos",
             "Os potes de cerâmica indígena serviam para guardar os ossos de pessoas mortas", "Os potes de cerâmica indígena serviam para colocar as crianças de castigo", "Os potes de cerâmica indígena serviam para guardar bebidas "],
        correct: 3, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/4.png"
    },
    {
        // Questão 05
        question: "Como os primeiros humanos que chegaram no território onde hoje é Mato Grosso do Sul viviam?",
        options: ["Iam ao supermercado comprar sua própria comida", "Caçavam animais e coletavam frutos e legumes para comer", "Faziam grandes plantações e pastoreio de animais",
             "Enviavam WhatsApp para aplicativos como “IFOOD” e pediam seus alimentos", "Trocavam pedras preciosas por alimentos com outros povos."],
        correct: 1, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/5.png"
    },
    {
        // Questão 06
        // Tem que arrumar
        question: "Qual é o significado da palavra nômade?",
        options: ["Que as pessoas não possuem habitação fixa e se alimentavam daquilo que a natureza podia lhes oferecer", "Pessoas que plantavam, colhiam e construíam suas próprias casas de barro",
            "O mesmo que sedentarismo, que as pessoas ficavam morando em um só lugar e faziam suas casas", "Que eram cuidadores de grandes rebanhos de mamutes e comerciantes da Pré-história",
            "Pessoas que viajavam de ônibus na Pré-história",
        ],
        correct: 0, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/6.png"
    },
    {
        // Questão 07
        question: "Quando esses povos pré-históricos chegaram ao território que hoje conhecemos como  Mato Grosso do Sul?",
        options: ["Há mais de 10 mil anos", " Há mais de 11.990.000 anos", " Há menos de 6.000 anos ", " Há menos de 3.000 anos ", "Há quase 1.500 anos"],
        correct: 0, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/7.png"
    },
    {
        // Questão 08
        // Tem que arrumar
        question: "Quais objetos os povos indígenas ceramistas agricultores não produziam de argila?",
         options: ["potes para guardar farinha e líquidos", "travessas, panelas, pratos", "adornos corporais como colares", "peças para rituais e urnas funerárias", "garfos, colheres e facas de metal"],
        correct: 4, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/8.png"
    },
    {
        // Questão 09
        question: "Por que alguns dos potes que estão no museu são expostos quebrados?",
        options: ["Para revelar informações sobre o passado e ao remontá-los pode-se saber mais informações sobre os habitantes antigos, o formato dos potes, seus desenhos, suas cores",
            "Para alertar as pessoas que tomem cuidado com os potes, pois são frágeis e quebram ao cair",
            "Para mostrar como se cola potes para os visitantes do museu",
            "Porque os potes eram produzidos quebrados pelos povos indígenas pré-históricos",
            "Porque eram de terracota e não foram queimados pelos povos ceramistas"],
        correct: 0, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/9.png"

    },
    {
        // Questão 10
        question: "Como eram feitos os potes cerâmicos na pré-história de Mato Grosso do Sul pelos povos indígenas?",
        options: ["Eram feitos nas fábricas localizadas nas tribos",
             "Eram feitas de argila, um tipo especial de barro, moldadas a mão ou no formato de “cobrinhas” decoradas com as unhas, dedos, sabugos de milho, pinturas e queimadas ",
              "Eram feitas de vidro e plantas da época e pintadas com tinta acrílica",
               "Vinham da Europa para o Brasil trazidas pelos portugueses em caravelas",
                "Vinham prontas de outros países da América do Sul, pois no Brasil não se produzia cerâmicas"],
        correct: 1, // Índice da resposta correta
        image: "./assets/assets-quiz/drive-download-20250120T155620Z-001/10.png"

    }
];


let currentQuestionIndex = 0;
let score = 0;

// Referências ao DOM
const bodyEl = document.getElementById("body");
const backBtn = document.getElementById("back");
const questionNumberEl = document.querySelector(".question-number span");
const questionEl = document.getElementById("question");
const imageContainer = document.getElementById("question-picture");
const optionsEl = document.getElementById("options");
const quizContainer = document.getElementById("quiz-container");
let nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");
const feedbackSound = document.getElementById("feedback-sound");

let selectedButton = null; // Armazena o botão selecionado atualmente
let selectedAnswerIndex = null; // Índice da resposta escolhida

function selectAnswer(selectedIndex) {
    // Habilita o botão "Próxima"
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.style.display = "block";
    }

    const buttons = document.querySelectorAll("#options button");

    // Se houver um botão previamente selecionado, remove o estilo
    if (selectedButton) {
        selectedButton.style.backgroundColor = "";  // Remove a cor de fundo
        selectedButton.style.color = "";  // Remove a cor do texto
        selectedButton.style.transform = ""; // Deixa o botão no tamanho normal novamente
    }

    // Atualiza o botão selecionado
    selectedButton = buttons[selectedIndex];
    selectedAnswerIndex = selectedIndex;

    // Aplica o estilo de fundo cinza e o texto branco
    selectedButton.style.backgroundColor = "#808080";
    selectedButton.style.color = "#FFF";
    // selectedButton.style.transform = "scale(1.1)";

}


function showQuestion() {    
    bodyEl.style = "";
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    const totalQuestions = questions.length;
    questionNumberEl.textContent = `${String(currentQuestionIndex + 1)}/${totalQuestions}`;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerHTML = option;
        // Adiciona o evento de clique ao botão
        button.onclick = () => selectAnswer(index);
        optionsEl.appendChild(button);
    });

    // Exibe a imagem, se existir
    if (currentQuestion.image) {
        imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="Imagem da questão">`;
    } else {
        imageContainer.innerHTML = ""; // Limpa o contêiner se não houver imagem
    }

    // Ajusta os tamanhos dos botões após inseri-los
    adjustButtonSizes();

    // Cria e exibe o botão "Próxima" dinamicamente
    const divNextQuestion = document.createElement("div");
    divNextQuestion.className = "next-question";
    const nextButton = document.createElement("button");
    nextButton.id = "next-btn";
    nextButton.textContent = "Próxima";

    // Adicionando evento de clique ao botão
    nextButton.onclick = function () {
        nextQuestion();
    };

    // Adicionando o botão dentro da div
    divNextQuestion.appendChild(nextButton);

    // Adicionando a div ao corpo do documento (ou a outro elemento desejado)
    document.body.appendChild(divNextQuestion);

    // // Oculta o botão "Próximo" no início de cada nova questão
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.style.display = "none";
    }

}

function isAnswered () {
    // Desabilita todos os botões de resposta
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(button => {
        button.disabled = true;
    });

}
function nextQuestion() {
    isAnswered();
    // Verifica se o índice da questão é válido
    if (selectedButton) {
        // Verifica se a resposta está correta
        const correctIndex = questions[currentQuestionIndex].correct;
        const isCorrect = selectedAnswerIndex === correctIndex;
        const correctButton = document.querySelectorAll("#options button")[correctIndex];
        
        if (isCorrect) {
            score++; // Incrementa o score apenas aqui
        }

        // Mostra o feedback
        showFeedback(isCorrect, selectedButton, correctButton);
        // Reseta as variáveis de seleção
        selectedButton = null;
        selectedAnswerIndex = null;


         // Avança para a próxima questão após 4 segundos
         setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                cleanNextButton();
                showQuestion();
            } else {
                bodyEl.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(./assets/img/home_photo.png)";
                endQuiz();
            }
        }, 500);

    }
}

function cleanNextButton() {
    const nextBtnContainer = document.querySelector(".next-question");
    if (nextBtnContainer) {
        nextBtnContainer.remove();
    }
}

function showFeedback(isCorrect, selectedButton, correctButton) {
    if (isCorrect) {
        feedbackSound.src = './assets/sounds/correct.mp3';
        feedbackSound.play();
        selectedButton.classList.add("correct-answer");
        selectedButton.style.backgroundColor = "#139413";
        selectedButton.style.color = "#FFF";
        selectedButton.style.transform = "scale(1.1)";
        selectedButton.style.filter = "brightness(1.2)";
    } else {
        feedbackSound.src = './assets/sounds/wrong-47985.mp3';
        feedbackSound.play();
        selectedButton.classList.add("wrong-answer");
        selectedButton.style.backgroundColor = "#ae0808";
        selectedButton.style.color = "#FFF";
        correctButton.classList.add("correct-answer");
        correctButton.style.backgroundColor = "#139413";
        correctButton.style.color = "#FFF";
        correctButton.style.transform = "scale(1.1)";
        correctButton.style.filter = "brightness(1.2)";
    }
}

function endQuiz() {
    //redirecionar para outra página com a pontuação na URL
    window.location.href = `end.html?score=${score}`;
}

function restartQuiz() {
    bodyEl.style = "";
    backBtn.style.visibility = "hidden";
    questionNumberEl.style.visibility = "visible";
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = "flex";
    resultContainer.style.display = "none";
    showQuestion();
}

// Inicializa o quiz
showQuestion();
adjustButtonSizes();

function adjustButtonSizes() {
    const buttons = document.querySelectorAll('#options button');
    // const maxHeight = Math.max(...Array.from(buttons).map(button => button.offsetHeight));
    const maxWidth = Math.max(...Array.from(buttons).map(button => button.offsetWidth));
    
    buttons.forEach(button => {
    //   button.style.height = `${maxHeight}px`;
      button.style.width = `${maxWidth}px`;
    });
  }