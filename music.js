function generateTrivia() {

    document.getElementById("CA").style.background='#ffffff';
    document.getElementById("B2").style.background='#ffffff'
    document.getElementById("B3").style.background='#ffffff';
    document.getElementById("B4").style.background='#ffffff';


  var request = new XMLHttpRequest();
  request.open('GET', 'https://opentdb.com/api.php?amount=1&category=26&difficulty=medium&type=multiple', true);

  request.onreadystatechange= function() {
    if (request.readyState == 4 && request.status == 200) {

      var text = request.responseText;

      var jsonText = JSON.parse(text);
      var question = jsonText.results["0"].question;
      var correct_answer = jsonText.results["0"].correct_answer;
      var incorrect_answers = jsonText.results["0"].incorrect_answers["0"];
      var incorrect_answers1 = jsonText.results["0"].incorrect_answers["1"];
      var incorrect_answers2 = jsonText.results["0"].incorrect_answers["2"];

      document.getElementById('question').innerHTML = question;
      //document.getElementById('results').innerHTML = results;

      document.getElementById('CA').innerHTML = correct_answer;
      document.getElementById('B2').innerHTML = incorrect_answers;
      document.getElementById('B3').innerHTML = incorrect_answers1;
      document.getElementById('B4').innerHTML = incorrect_answers2;


      console.log(question);
      console.log(correct_answer);
      console.log(incorrect_answers);
    }
  };

  request.send();
}

function clickb(button) {
  console.log('lo')
  if (button === '1'){
    console.log('sey')
    document.getElementById("CA").style.background='#87f542';
  }
  if (button ==='2'){
    document.getElementById("B2").style.background='#f54242'
  }
  if (button ==='3'){
    document.getElementById("B3").style.background='#f54242';
  }
  if (button ==='4'){
    document.getElementById("B4").style.background='#f54242';

  }
}
