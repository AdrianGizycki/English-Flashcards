
const divContents1 = document.querySelector("#front-card-content");
const divContents2 = document.querySelector("#back-card-content");
const btnBeck = document.querySelector(".btn1");
const btnNext = document.querySelector(".btn2");
const btnToggle = document.querySelector(".btn3");
const flipCard = document.querySelector('.flip-card');
const base = document.querySelector('.data');
const addBtn = document.querySelector('.add');
const speaker = document.querySelector('.speaker-icon');
const close = document.querySelector('.close');
const visible = document.querySelector('.visible');
const hide = document.querySelector('.hide');
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');
const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const addForm = document.querySelector('.add-btn');
const form = document.querySelector('#form');
const speakerImgBack = document.querySelector('#speaker-img-back');
const speakerImgFront = document.querySelector('#speaker-img-front');
console.log(speakerImgBack);
console.log(speakerImgFront);


fetch('http://localhost:3000/data')

  .then(response => response.json())

  .then((data) => {
    const min = 0
    var max = data.length;
    let counter = Math.floor(Math.random() * (max - min)) + min;
    divContents1.innerText = (data)[counter].english;
    divContents2.innerText = (data)[counter].polish;
    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 32) {
      counter = Math.floor(Math.random() * (max - min)) + min;
      divContents1.innerText = (data)[counter].english;
      divContents2.innerText = (data)[counter].polish;
      }
      
    });

    speakerImgFront.addEventListener('click', (e) => {
      e.stopPropagation();
      var u = new SpeechSynthesisUtterance();
        u.text = (data)[counter].english;
        u.lang = 'en-EN';
        u.rate = 0.8;
        speechSynthesis.speak(u);
    });
    speakerImgBack.addEventListener('click', (e) => {
      e.stopPropagation();
      var u = new SpeechSynthesisUtterance();
      u.text = (data)[counter].polish;
      u.lang = 'pl-PL';
      u.rate = 0.8;
      speechSynthesis.speak(u);
    });
  
      // Web Speech API
      



function addData(e) {
  
  let inputs = document.querySelectorAll("input");
  
   if (inputs[0].value == '' || inputs[1].value == '') {
     message1.classList.toggle('visible');
  } else {
    const inputE = document.querySelector('.inputEng').value;
    const inputP = document.querySelector('.inputPl').value;
  fetch('http://localhost:3000/data', {
    method: 'POST',
    body: JSON.stringify({
      english: inputE.toUpperCase(),
      polish: inputP.toUpperCase(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .then(message2.classList.toggle('visible'))
  form.classList.add('hide');
  addForm.classList.remove('hide');
  reset();
  }
  e.preventDefault();
}

form.addEventListener('submit', addData);

close1.addEventListener('click', function() {
  message1.classList.remove('visible');
});

close2.addEventListener('click', function() {
message2.classList.remove('visible');
});

addForm.addEventListener('click', () => {
  form.classList.remove('hide');
  addForm.classList.add('hide');
});

flipCard.addEventListener('click', () => {
  flipCard.classList.toggle("flipped")
 //  speaker.classList.toggle('hide');
});


})

