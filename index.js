const quizData = [
    {
        Question: "Which is the language that runs in a web browser",
        A: "Java",
        B: "C",
        C: "Python",
        D: "Javascript",

        correct: "D",

    },
    {
        Question: "What does CSS stands for ",
        A: "Central style sheet",
        B: "Cascading Style sheet",
        C: " Cascading simple sheets",
        D: " Cars Sandals Slider",

        correct: "B",
    },
    {
        Question: "What does HTML stands for",
        A: "Hypertext Mark up language",
        B: "Hypertext Markdown language",
        C: "HyperLoop machine language",
        D: "Helicopter Terminal Machine landers",

        correct: "A",
    },
    {
        Question: "Which year was Javascript Found",
        A: "1979",
        B: "1995",
        C: "1963",
        D: "None of the above",

        correct: "B",
    }
];
const quiz = document.getElementById('quiz');
const answerElements = document.querySelector(".answer");
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    
    answerElements.forEach((answerElement) => (answerElement.checked = false));

};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement)=> {
        if(answerElement.checked)answer = answerElement.id;
    });
    return answer;
}
const loadQuiz = () =>{
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.Question;
    a_text.innerText = currentQuizData.A;
    b_text.innerText = currentQuizData.B;
    c_text.innerText = currentQuizData.C;
    d_text.innerText = currentQuizData.D;
};

loadQuiz();

submitButton.addEventListener("click", ()=>{
    const answer = getSelected();
    if(answer){
        if(answer== quizData[currentQuiz].correct) score ++;
        currentQuiz++;
        if(currentQuiz<quizData.length) loadQuiz();
    else{
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick = "history.go(0)">Play Again</button>`
        // locat
    }
    }
});