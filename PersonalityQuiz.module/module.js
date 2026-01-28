/**
 * Personality Quiz Module JavaScript
 * ===================================
 *
 * Features:
 * - Dynamic question rendering with answer scoring
 * - Profile/personality type tracking across multiple questions
 * - Progress bar with percentage completion
 * - Back navigation with score decrement
 * - Form integration with hidden field injection
 * - Restart functionality
 *
 * Customization:
 * - Modify quizData.profiles to change personality types
 * - Update quizData.questions array to customize questions/answers
 * - Each answer has a "type" that maps to a profile
 */

$(document).ready(function () {
    // Initialize profile scores
    let profiles = {};
    let selectedAnswers = [];

    // Quiz Configuration - Customize questions and personality types here
    const quizData = {
        profiles: ["Type A", "Type B", "Type C", "Type D"],
        questions: [
            {
                question: "What motivates you most?",
                answers: [
                    { text: "Achieving goals and setting records.", type: "Type A" },
                    { text: "Overcoming challenges and bouncing back.", type: "Type B" },
                    { text: "Helping and serving others.", type: "Type C" },
                    { text: "Exploring new opportunities.", type: "Type D" }
                ]
            },
            {
                question: "How do you find meaning in your work?",
                answers: [
                    { text: "When I accomplish my objectives.", type: "Type A" },
                    { text: "When I overcome obstacles.", type: "Type B" },
                    { text: "When I make a difference for others.", type: "Type C" },
                    { text: "When I'm navigating change successfully.", type: "Type D" }
                ]
            },
            {
                question: "What do you spend most of your time doing?",
                answers: [
                    { text: "Working towards my goals.", type: "Type A" },
                    { text: "Recovering from challenges.", type: "Type B" },
                    { text: "Helping others.", type: "Type C" },
                    { text: "Planning my next steps.", type: "Type D" }
                ]
            },
            {
                question: "What type of learning interests you most?",
                answers: [
                    { text: "Performance optimization techniques", type: "Type A" },
                    { text: "Resilience and recovery strategies", type: "Type B" },
                    { text: "How to better help others succeed", type: "Type C" },
                    { text: "Transition and change management", type: "Type D" }
                ]
            },
            {
                question: "Why do you value personal growth?",
                answers: [
                    { text: "It helps me be more productive.", type: "Type A" },
                    { text: "It gives me hope and courage.", type: "Type B" },
                    { text: "It gives me tools to help others.", type: "Type C" },
                    { text: "It helps me envision my future.", type: "Type D" }
                ]
            },
            {
                question: "What's your preferred approach to challenges?",
                answers: [
                    { text: "Systematic planning and execution.", type: "Type A" },
                    { text: "Reflection and mindfulness.", type: "Type B" },
                    { text: "Learning from others' experiences.", type: "Type C" },
                    { text: "Following a step-by-step guide.", type: "Type D" }
                ]
            },
            {
                question: "Which quality best describes your ideal self?",
                answers: [
                    { text: "Discipline", type: "Type A" },
                    { text: "Courage", type: "Type B" },
                    { text: "Compassion", type: "Type C" },
                    { text: "Curiosity", type: "Type D" }
                ]
            }
        ]
    };

    // Initialize profiles dynamically based on the quiz data
    quizData.profiles.forEach(profile => profiles[profile] = 0);

    let currentQuestion = 0;

    /**
     * Display a question and its answer options
     * @param {number} index - The question index to display
     */
    function showQuestion(index) {
        const questionElement = $('#question');
        const optionsElement = $('#options');
        const question = quizData.questions[index];

        questionElement.text(question.question);
        optionsElement.empty();

        question.answers.forEach(answer => {
            const button = $('<button>')
                .addClass('option-div')
                .text(answer.text)
                .on('click', function () {
                    selectAnswer(answer.type, answer.text);
                });
            optionsElement.append(button);
        });

        // Update question counter
        $('.number-of-question').text(`${index + 1} / ${quizData.questions.length}`);
        updateProgressBar(index);

        // Toggle back button visibility
        $('#back-button').toggleClass('hide', index === 0);
    }

    /**
     * Handle answer selection
     * @param {string} type - The personality type associated with this answer
     * @param {string} text - The answer text (for tracking)
     */
    function selectAnswer(type, text) {
        profiles[type]++;
        selectedAnswers[currentQuestion] = { type, text };
        currentQuestion++;

        if (currentQuestion < quizData.questions.length) {
            showQuestion(currentQuestion);
        } else {
            displayResult();
        }
    }

    /**
     * Calculate and display the final result
     */
    function displayResult() {
        $('#display-container').addClass('hide');
        $('.result-container').removeClass('hide');

        // Find the profile with the highest score
        const result = Object.keys(profiles).reduce((a, b) =>
            profiles[a] > profiles[b] ? a : b
        );

        // Inject result into hidden form field
        $('#quiz_result').val(result);
    }

    /**
     * Update the progress bar width
     * @param {number} index - Current question index
     */
    function updateProgressBar(index) {
        const progressPercentage = ((index + 1) / quizData.questions.length) * 100;
        $('.progress').css('width', `${progressPercentage}%`);
    }

    // Back button handler - decrement score when going back
    $('#back-button').on('click', function () {
        if (currentQuestion > 0) {
            currentQuestion--;
            const selectedAnswer = selectedAnswers[currentQuestion];
            if (selectedAnswer) {
                profiles[selectedAnswer.type]--;
                showQuestion(currentQuestion);
            }
        }
    });

    // Restart quiz handler
    $('#restart').on('click', function () {
        currentQuestion = 0;
        selectedAnswers = [];
        quizData.profiles.forEach(profile => profiles[profile] = 0);
        $('.result-container').addClass('hide');
        $('#display-container').removeClass('hide');
        showQuestion(currentQuestion);
    });

    // Form submission handler
    $('#_form_quiz_').on('submit', function (e) {
        e.preventDefault();
        if ($('#quiz_result').val() !== "") {
            this.submit();
        } else {
            alert('Please complete the quiz first.');
        }
    });

    // Initialize the quiz
    showQuestion(currentQuestion);
});
