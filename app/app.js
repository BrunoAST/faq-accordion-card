const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const arrows = document.querySelectorAll('.arrow');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        this.toggleAnswer(i);
        this.toggleArrowOrientation(i);
        this.toggleQuestionHighlight(i);
    });
}

function toggleAnswer(index) {
    const answer = answers[index];

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

function toggleArrowOrientation(index) {
    const arrow = arrows[index];

    if (arrow.style.transform === 'rotate(-180deg)')
        arrow.style.transform = 'rotate(0deg)';
    else
        arrow.style.transform = 'rotate(-180deg)';
}

function toggleQuestionHighlight(index) {
    const question = questions[index];

    if (question.style.fontWeight === 'bold')
        question.style.fontWeight = 'normal';
    else
        question.style.fontWeight = 'bold';
}