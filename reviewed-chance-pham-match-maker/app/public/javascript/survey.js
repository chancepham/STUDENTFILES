

$(document).ready(function () {
    
    $('#resultArea').hide()
    let userData;
    $('#newUser').bind("click", function (e) {
        e.preventDefault()
        document.getElementById('showResults').innerHTML = '';
        $('#resultArea').slideDown('slow')
        $('#entireQuiz').slideUp('slow')
        $('#actQuiz').slideUp('slow')
        userData = `{   "name": "${$('#name').val()} (ME)",
        "photo": "${$('#profilePic').val()}",
        "scores": [
            ${parseInt($('.userChoice .selected').eq(0).text())},
            ${parseInt($('.userChoice .selected').eq(1).text())},
            ${parseInt($('.userChoice .selected').eq(2).text())},
            ${parseInt($('.userChoice .selected').eq(3).text())},
            ${parseInt($('.userChoice .selected').eq(4).text())},
            ${parseInt($('.userChoice .selected').eq(5).text())},
            ${parseInt($('.userChoice .selected').eq(6).text())},
            ${parseInt($('.userChoice .selected').eq(7).text())},
            ${parseInt($('.userChoice .selected').eq(8).text())},
            ${parseInt($('.userChoice .selected').eq(9).text())}
        ]}`;
        
        userData = JSON.parse(userData)
        console.log(userData)
        console.log(userData.scores.length)
        let userScore = 0;
        for (let i = 0; i < userData.scores.length; i++){
            userScore += userData.scores[i]
            console.log(userScore)
        }
        
        $.post('/userdata', userData, successFunction).then(function () {
            mostComp()
        });
        
        function difference(a, b) {
            return Math.abs(a - b);
        }
        
        
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        function successFunction(matches) {
            console.log('yeah yrah')
            let tempDiffArr = [];
            for (let i = 0; i < matches.length; i++){
                tempDiffArr = [];
                
                for (let x = 0; x < matches[i].scores.length; x++){
                    console.log(matches[i].scores.length)
                    let result = difference(userData.scores[x], matches[i].scores[x])
                    tempDiffArr.push(result)
                }
                let totalScore = tempDiffArr.reduce(reducer)
                
                
                let tempHTMLStore = `    
                <div class="container p-5 border-top">
                <div class="text-center p-2">
                <img class="img-fluid" src="${matches[i].photo}">
                <a href="#">
                <h1>${matches[i].name}</h1>
                </a>
                
                <p>You are different by <span class="matchScore">${totalScore}</span> points</p>
                
                
                </div>
                
                </div>`
                $(tempHTMLStore).appendTo('#showResults');
            }
            
            
        }
        function mostComp() {
         
            let unsortArr = []
            for (let i = 0; i < $('.matchScore').length; i++){
                
                unsortArr.push(parseInt($('.matchScore').eq(i).text()))
                console.log(unsortArr)
            }
            unsortArr.sort(function (a, b) {
                return a - b;
            });
            console.log(unsortArr)
            console.log(unsortArr)
            $('.matchScore').parent().parent().parent().hide();
            for (let x = 0; x < $('.matchScore').length; x++) {
                console.log('gesadadstsss')
                if (parseInt($('.matchScore').eq(x).text()) === parseInt(unsortArr[0])) {
                    console.log('getsss')
                    $('.matchScore').eq(x).parent().parent().parent().show();
                    console.log('getsss')
                    break
                }

            }
        }

        
    });
});
