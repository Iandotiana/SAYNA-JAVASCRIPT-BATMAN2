$(document).ready(function() {
    const demarrer = document.getElementById('demarrer');
    const nextButton = document.getElementById('question-suivante');

    demarrer.addEventListener('click',(e)=> {
        e.preventDefault;
        showQuestions();
        $.ajax({
            url: 'https://batman-api.sayna.space/questions',
            datatype: 'json',
            success: function(quizz) {
                for (let i = 0; i< quizz.length; i++) {
                    console.log(quizz[i].response);
                }
            },
            error: function () {
                console.log ("Problème au niveau du server _ API non retrouvé")
            },
        });
    });
});

function showQuestions() {
    const question = document.getElementById('questions');
    question.style.display = 'block';
    const demarrer = document.getElementById('entete');
    demarrer.style.display =' none';
    $('#question-suivante').show();
}