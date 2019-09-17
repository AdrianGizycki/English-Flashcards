const englishWords = ['cat', 'dog'];
const polishWords = ['kot', 'pies'];
const divContents1 = document.querySelector(".divContents1");
const divContents2 = document.querySelector(".divContents2");
const btnBeck = document.querySelector(".btn1");
const btnNext = document.querySelector(".btn2");
const 

var counter = 0;
btnNext.addEventListener('click', function(){
  counter++;
  divContents1.innerText = englishWords[counter];
  divContents2.innerText = polishWords[counter];
})

btnBeck.addEventListener('click', function(){
  counter--;
  divContents1.innerText = englishWords[counter];
  divContents2.innerText = polishWords[counter];
})