// faq.js
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-container");
  if (!faqContainer) return;

  const questions = faqContainer.querySelectorAll(".faq-question");
  const answers = faqContainer.querySelectorAll(".faq-answer");

  // Detectamos la última pregunta
  const lastQuestion = faqContainer.querySelector(".bottomquestion");

  function closeAll() {
    answers.forEach((a) => a.classList.add("hiddenanswer"));
    questions.forEach((q) => {
      q.classList.remove("is-active");
      q.setAttribute("aria-expanded", "false");
    });

    // 🔁 Restauramos la última pregunta a bottomquestion
    if (lastQuestion) {
      lastQuestion.classList.remove("middlequestion");
      lastQuestion.classList.add("bottomquestion");
    }
  }

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      if (!answer || !answer.classList.contains("faq-answer")) return;

      const isOpen = !answer.classList.contains("hiddenanswer");

      closeAll();

      if (!isOpen) {
        answer.classList.remove("hiddenanswer");
        btn.classList.add("is-active");
        btn.setAttribute("aria-expanded", "true");

        // 👇 SI es la última pregunta, cambiamos estilos
        if (btn === lastQuestion) {
          btn.classList.remove("bottomquestion");
          btn.classList.add("middlequestion");
        }
      }
    });
  });
});
