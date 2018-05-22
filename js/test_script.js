'use strict';

var oTest = {
    testItems: [
        {
            testQuestion: '1. С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?',
            answerVariant1: 'a. Storage',
            answerVariant2: 'b. localStorage', //right
            answerVariant3: 'c. cookies',
            answerVariant4: 'd. LocalStorage'

        },

        {
            testQuestion: '2. С помощью какого метода можно сохранить данные в локальное хранилище?',
            answerVariant1: 'a. saveItem()',
            answerVariant2: 'b. saveToLocalStorage()',
            answerVariant3: 'c. save()',
            answerVariant4: 'd. setItem()' //right

        },

        {
            testQuestion: '3. Какой из пунктов не верен по отношению к строгому режиму javascript?',
            answerVariant1: 'a. Запрещено дублирование полей объектов',
            answerVariant2: 'b. Запрещено удаление полей, имеющих свойство writable = false',
            answerVariant3: 'c. Запрещено дублирование параметров функции',
            answerVariant4: 'd. Запрещено использование директивы eval' //right

        },

        {
            testQuestion: '4. Для чего используется конструкция try-catch в javascript?',
            answerVariant1: 'a. Для генерирования ошибок.',
            answerVariant2: 'b. В строгом режиме весь код необходимо оборачивать в try-catch.',
            answerVariant3: 'c. Для обработки возможных ошибок', //right
            answerVariant4: 'd. Для замены условного оператора if'

        },

    ]
};

localStorage.setItem('test', JSON.stringify(oTest));
var testToParse = localStorage.getItem('test');
var oParsedTest = JSON.parse(testToParse);


$(function () {

    var aCorrectAnswers = ["answer_1_2", "answer_2_4", "answer_3_4", "answer_4_3",];
    var aChosenAnswers = [];

    function checkAnswers () {
        if (aCorrectAnswers.length === aChosenAnswers.length) {
            var counter = 0;
            for (var i = 0; i < aCorrectAnswers.length; i++) {
                if (aChosenAnswers[i] === aCorrectAnswers[i]) {
                    counter++;
                }
            }
            var sResult = 'Your result is ' + counter/aCorrectAnswers.length*100 + ' %';
            $('#showTestResult').html(sResult);
            aChosenAnswers = [];
            // $( "input[type=radio]:checked" ).removeAttr('checked');
        };
        $( "input[type=radio]:checked" ).removeAttr('checked');
        console.log(counter);
    };

    var $userCard = $(".test")[0];
    $userCard.innerHTML = tmpl("user_card", oParsedTest);

    $('.submitResults').click( function () {
        try {
            var $checkedRadioBox = $( "input[type=radio]:checked" );
            for (var i = 0; i < oTest.testItems.length; i++) {
                aChosenAnswers.push($checkedRadioBox[i].value);
            }
            checkAnswers();
            // $checkedRadioBox.removeAttr('checked');
        } catch (e) {
            $('#showTestResult').html('<span>Please, choose one answer variant for all questions.</span>');
            aChosenAnswers = [];
        }
        // checkAnswers();
    });

    $('#myModal').on('hidden.bs.modal', function () {
        $( "input[type=radio]:checked" ).removeAttr("checked");
    });
});


