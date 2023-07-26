document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to avoid page reload

    // Get all the fill-in-the-blank input fields
    const inputFields = document.querySelectorAll('[data-answer]');

    // Store user's answers and correct answers in arrays
    const userAnswers = [];
    const correctAnswers = [];

    // Extract user's answers and correct answers from input fields
    inputFields.forEach((inputField) => {
        const userAnswer = inputField.value.trim().toLowerCase(); // Convert user's answer to lowercase
        const correctAnswer = inputField.dataset.answer.toLowerCase(); // Convert correct answer to lowercase

        userAnswers.push(userAnswer);
        correctAnswers.push(correctAnswer);
    });

    // Compare the user's answers with the correct answers
    const numQuestions = correctAnswers.length;
    let numCorrect = 0;
    for (let i = 0; i < numQuestions; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            numCorrect++;
        }
    }

    // Calculate the score and display the feedback message
    const score = (numCorrect / numQuestions) * 100;
    const feedbackMessage = `You got ${numCorrect} out of ${numQuestions} questions right! Your score: ${score.toFixed(
        2
    )}%`;
    document.getElementById("feedback-message").textContent = feedbackMessage;
});