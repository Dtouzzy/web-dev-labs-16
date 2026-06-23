
const scoreInput = document.getElementById('scoreInput');
const calcBtn = document.getElementById('calcBtn');
const results = document.getElementById('results');

calcBtn.addEventListener('click', calculateGrade);

scoreInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    calculateGrade();
  }
});

function calculateGrade() {
  const score = parseFloat(scoreInput.value);
  
  results.className = '';
  
  if (isNaN(score) || score < 0 || score > 100) {
    results.textContent = 'Error: Please enter a valid number between 0 and 100';
    results.classList.add('error');
    return;
  }
  
  let grade = '';
  let description = '';
  
  if (score >= 70 && score <= 100) {
    grade = 'A';
    description = 'Excellent';
  } else if (score >= 60 && score <= 69) {
    grade = 'B';
    description = 'Very Good';
  } else if (score >= 50 && score <= 59) {
    grade = 'C';
    description = 'Good';
  } else if (score >= 40 && score <= 49) {
    grade = 'D';
    description = 'Pass';
  } else {
    grade = 'F';
    description = 'Fail';
  }
  
  results.innerHTML = `Entered Score: ${score}<br>Calculated Grade: ${grade}<br>Description: ${description}`;
  results.classList.add('grade-' + grade);
  
  scoreInput.value = '';
  scoreInput.focus();
}
