// Base de preguntas y respuestas (30 preguntas)
const questions = [
    { question: "¿Cuál es la capital de Francia?", answers: ["Madrid", "París", "Roma", "Berlin"], correct: 2 },
    { question: "¿Quién escribió 'Cien años de soledad'?", answers: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Pablo Neruda"], correct: 1 },
    { question: "¿Cuántos continentes hay?", answers: ["5", "6", "7", "8"], correct: 3 },
    { question: "¿Qué gas respiramos?", answers: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"], correct: 1 },
    { question: "¿En qué año se estrenó 'Star Wars'?", answers: ["1975", "1980", "1977", "1990"], correct: 3 },
    // Agrega más preguntas aquí hasta 30
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    document.getElementById("answer1").textContent = q.answers[0];
    document.getElementById("answer2").textContent = q.answers[1];
    document.getElementById("answer3").textContent = q.answers[2];
    document.getElementById("answer4").textContent = q
}
