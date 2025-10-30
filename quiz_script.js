const quizData = [
    {
        question: "Que signifie CPU dans un ordinateur ?",
        a: "Central Processing Unit",
        b: "Computer Personal Unit",
        c: "Central Power Unit",
        d: "Control Processing Unit",
        correct: "a"
    },
    {
        question: "Quel langage est principalement utilisé pour le développement Web côté client ?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Java",
        correct: "b"
    },
    {
        question: "Quel est le système d'exploitation open source le plus connu ?",
        a: "Windows",
        b: "MacOS",
        c: "Linux",
        d: "Android",
        correct: "c"
    },
    {
        question: "Que signifie RAM dans un ordinateur ?",
        a: "Read Access Memory",
        b: "Random Access Memory",
        c: "Run Access Memory",
        d: "Read And Modify",
        correct: "b"
    },
    {
        question: "Quelle est la fonction principale d'un antivirus ?",
        a: "Améliorer la vitesse de l'ordinateur",
        b: "Protéger contre les virus et logiciels malveillants",
        c: "Nettoyer l'écran",
        d: "Augmenter la mémoire RAM",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resultDiv = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];
    quiz.innerHTML = `
        <div class="quiz-question">${currentQuiz.question}</div>
        <div class="quiz-options">
            <label><input type="radio" name="answer" value="a"> ${currentQuiz.a}</label>
            <label><input type="radio" name="answer" value="b"> ${currentQuiz.b}</label>
            <label><input type="radio" name="answer" value="c"> ${currentQuiz.c}</label>
            <label><input type="radio" name="answer" value="d"> ${currentQuiz.d}</label>
        </div>
    `;
}

function getSelected() {
    const answers = document.getElementsByName('answer');
    let answer = undefined;
    for(let i = 0; i < answers.length; i++) {
        if(answers[i].checked) {
            answer = answers[i].value;
            break;
        }
    }
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuestion].correct) score++;
        currentQuestion++;
        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = "";
            submitBtn.style.display = "none";
            resultDiv.innerHTML = `<h2>Tu as reussi ${score} sur ${quizData.length} questions !</h2>`;
        }
    } else {
        alert("Veuillez selectionner une reponse !");
    }
});

loadQuiz();
