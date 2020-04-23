const quizDiv = document.querySelector('#quiz');
const btnSubmit = document.querySelector('#submit');

// btnSubmit.addEventListener('click', checkAnswer);

const quizzes = [
  {
    id: 1,
    question: 'What is 1 + 1',
    answers: ['one', 'two', 'three', 'four'],
    correct_answer: 'two',
  },
];

// function loadQuiz() {
//   let output = '';

//   quizzes.forEach((quiz) => {
//     output += `
//     <div id="quiz-div-${quiz.id}">
//         <p>${quiz.id}. ${quiz.question}</p>
//         <input type="radio" name="quiz-${quiz.id}" value="${quiz.answers[0]}"/>${quiz.answers[0]} <br />
//         <input type="radio" name="quiz-${quiz.id}" value="${quiz.answers[1]}"/>${quiz.answers[1]} <br />
//         <input type="radio" name="quiz-${quiz.id}" value="${quiz.answers[2]}"/>${quiz.answers[2]} <br />
//         <input type="radio" name="quiz-${quiz.id}" value="${quiz.answers[3]}"/>${quiz.answers[3]} <br />
//     </div>
//     `;
//   });

//   quizDiv.innerHTML = output;
// }

// function checkAnswer(e) {
//   let select1 = getSelectedOption('quiz-1');
//   console.log(select1);
// }

// function getSelectedOption(name) {
//   const options = document.getElementsByName(name);
//   let options_value;
//   for (let i = 0; i < options.length; i++) {
//     if (options[i].checked) {
//       options_value = options[i].value;
//       break;
//     }
//   }
//   return options_value;
// }
