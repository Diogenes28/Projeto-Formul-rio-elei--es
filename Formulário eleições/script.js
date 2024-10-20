document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Verifica se todas as perguntas foram respondidas
        const questions = form.querySelectorAll('input[type="radio"]');
        let allAnswered = true;

        // Checa se todas as perguntas têm uma resposta selecionada
        questions.forEach(radio => {
            const questionName = radio.name;
            const questionAnswered = document.querySelector(`input[name="${questionName}"]:checked`);
            if (!questionAnswered) {
                allAnswered = false;
            }
        });

        if (allAnswered) {
            feedback.textContent = 'Obrigado por participar da pesquisa! Seus dados foram enviados com sucesso.';
            feedback.style.color = '#4CAF50'; // Verde claro para feedback positivo
        } else {
            feedback.textContent = 'Por favor, responda a todas as perguntas antes de enviar.';
            feedback.style.color = '#f44336'; // Vermelho para erro
        }
    });
});