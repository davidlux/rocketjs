var changeState = function(state) {

  var
    state1 = document.getElementsByClassName('state1')[0];
    state2 = document.getElementsByClassName('state2')[0];
    state3 = document.getElementsByClassName('state3')[0];
    state4 = document.getElementsByClassName('state4')[0];
    state5 = document.getElementsByClassName('state5')[0];
    rocket = document.getElementsByClassName('rocket')[0];
    countdownText = document.getElementById("countdown");
    nervousImg = document.getElementById("nervous");


  switch (state) {

    case 1:
      clearInterval(timer);
      nervous.style.display = 'none';
      state2.style.display = 'none';
      state3.style.display = 'none';
      state4.style.display = 'none';
      state5.style.display = 'none';
      state1.style.display = 'block';

      rocket.src = 'img/rocket-state1.png';
      document.getElementsByClassName('rocket flying')[0].className = 'rocket';
      break;

    case 2:
      state1.style.display = 'none';
      state2.style.display = 'block';
      rocket.src = 'img/rocket-state2.gif';

      var countdown = 10;
      countdownText.innerHTML = countdown--;
      timer = setInterval(function(){
        countdownText.innerHTML = countdown--;
        if (countdown===8) {
          nervousImg.style.display = 'block';
        }
        if (countdown===5) {
          nervousImg.style.display = 'none';
        }
        if (countdown===-1) {
          clearInterval(timer);
          changeState(3);
        }
      }, 1000);
      break;

    case 3:
      state2.style.display = 'none';
      state3.style.display = 'block';
      rocket.className += ' flying';
      document.getElementsByClassName('rocket flying')[0].src = 'img/rocket-state3.gif';

      setTimeout(function() {
        var randomNumber = Math.floor(Math.random()*10);
        if (randomNumber < 4) {
          console.log("good");
          changeState(4);
        } else {
          console.log("bad");
          changeState(5);
        }
      }, 700);
      break;

    case 4:
      state3.style.display = 'none';
      state4.style.display = 'block';

      break;

    case 5:
      state3.style.display = 'none';
      state5.style.display = 'block';
      document.getElementsByClassName('rocket flying')[0].className = 'rocket';
      rocket.src = 'img/boom.png';
  };
}
