$(document).ready(function() {
    const demarrer = document.getElementById('demarrer');
    const nextButton = document.getElementById('question-suivante');

    demarrer.addEventListener('click',(e)=> {
        e.preventDefault;
        showQuestions();
        $.ajax({
            url: 'https://batman-api.sayna.space/questions',
            datatype: 'json',
            success: function(questions) {
                
                let totalPoint= 0;
                let currentQuestion = 1;
                let totalQuizz = questions.length;

                $('#current-question').text(currentQuestion);
                $('#total').text(totalQuizz);
                setForm(questions[0].question, questions[0].response,questions[0].currentQuestion);

                nextButton.addEventListener('click',(e)=>{
                 e.preventDefault;

                 for( i = 3; i<22;i++){
                    $('#img').attr("src","./illustrations/Batgame_"+ i + ".png" ); 
                 };
                 for(i = 0;i <= totalQuizz; i++ ){
                    $('.question-quizz').text(question[i]);
                 };
                 for(i = 1;i <= totalQuizz; i++ ){
                    $('#current-question').text(currentQuestion[i]);
                 };

                 
                 
                 
                 let chooseResponse = isChooseResponse(questions,currentQuestion);
                 let isChoose = chooseResponse[0];
                 let userResponse = chooseResponse[1];

                 if(currentQuestion < (totalQuizz -1 )){

                     if(isChoose){

                        currentQuestion ++;
                      
                        setTimeout(()=>{
                            if(currentQuestion < totalQuizz ){
                                setForm(questions[0].question, questions[0].response,questions[0].currentQuestion);

                            }
                        },1000);
                        if(currentQuestion === totalQuizz ){
                            $('#question-suivante').text('VOIR RESULTAT');
                        }
                        console.log(userResponse);
                        totalPoint = userResponse === true ? (totalPoint + 1) : totalPoint;
                        userResponse = "false";
                        console.log(totalPoint);

                     }
                 else{
                     if(isChoose){
                        totalPoint = userResponse === true ? (totalPoint + 1) : totalPoint;
                        userResponse = "false";
                        console.log(totalPoint);
                        if(totalPoint <= (totalQuizz / 3)){
                            $('#note').text(totalPoint +"/" + totalQuizz + "ce n'est pas tout à fait ça");
                            $('#message').text("Oula!Heureusement que le  Riddler est sous les verrous... Il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue! aller, rien n'st perdu!");

                        }
                        else if(totalPoint <= (totalQuizz / 2)){ 
                            $('#titre').text(totalPoint +"/" + totalQuizz + "Pas mal!");
                            $('#msg-result').text("Encore un peu d'entrainement avec le Chevalier Noir vous serait bénéfique, mais vous pouvezmarchez la tête haute vos connaissances sont là. A vous de les consolider, foncez Gotham est votre terrain de chasse! ");
                        }
                        else {
                            $('#titre').text(totalPoint +"/" + totalQuizz + "Bravo!");
                            $('#msg-result').text("Vous êtes véritablement un super fan de l'univers de Batman ! Comics,films , rien ne vous échappe. Bruce Wayne a de quoi être fier, Gotham est en paix et batman peut se prendre sa retraite, vous veuillez aux grains!");

                        }
                        $('.popup-result').css("display", "block");

                     }
                 }

                 }
                })

                
            },
            error: function () {
                console.log ("Problème au niveau du server _ API non retrouvé");
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
};

function setForm(question,response,currentQuestion){
    $('#img').attr("src","./illustrations/Batgame_3.png" );
    $('.question-quizz').empty();
    $('.question-quizz').text(question);
    // for (let i =0;i< response.length; i++){
    //     $('.choisirReponse').append("<div class='qcm'> </div>");
    //     $('.qcm').append("<input type='checkbox' name='choix' id ='checkbox'>");
    //     $('.qcm').append("<label  for='checkbox'class = 'response'></label>");
    //     $('.response').text(response[i].text);
        
    // };

    response.forEach( response => {
        $('.choisirReponse').append("<div class='qcm'> </div>");
        $('.qcm').append("<input type='checkbox' name='choix' id ='checkbox'>");
        $('.qcm').append("<label  for='checkbox'class = 'response'></label>");
        $('.response').text(response.text);
    });


};

function isChooseResponse(questions,currentQuestion){
    let notChoose = true;
    let userResponse = false;

    for(let i =0 ; i < questions[currentQuestion].response.length; i++){
        if($('#checkbox').is(":checked")){
            notChoose = false;
            userResponse = questions[currentQuestion].response[i].isGood;
            console.log(questions[currentQuestion].response[i].isGood)
        };
    };
};