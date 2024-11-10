const plusIcon = document.querySelectorAll(".plus-icon");
const minusIcon = document.querySelectorAll(".minus-icon");
const answers = document.querySelectorAll(".answer");

function toggleAnswer(icon) {
  const currentAnswer = icon.parentElement.nextElementSibling;
  answers.forEach((answer) => {
    if (currentAnswer === answer) {
      answer.classList.toggle("active");
    }
  });
}

plusIcon.forEach((plus) => {
  plus.addEventListener("click", () => {
    toggleAnswer(plus);
    plus.classList.remove("active");
    plus.nextElementSibling.classList.add("active");
  });
});
minusIcon.forEach((minus) => {
  minus.addEventListener("click", () => {
    toggleAnswer(minus);

    const plus = minus.previousElementSibling;
    if (!plus.classList.contains("active")) {
      minus.classList.remove("active");
      plus.classList.add("active");
    }
  });
});
