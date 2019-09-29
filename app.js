
const divContents1 = document.querySelector(".flip-card-front");
const divContents2 = document.querySelector(".flip-card-back");
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
const message2 = document.querySelector('.message2')


fetch('http://localhost:3000/data')

  .then(response => response.json())

  .then((data) => {
    const min = 0
    var max = data.length;
    let counter = 0;
    divContents1.innerText = (data)[counter].english;
    divContents2.innerText = (data)[counter].polish;
    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 32) {
      counter = Math.floor(Math.random() * (max - min)) + min;
      divContents1.innerText = (data)[counter].english;
      divContents2.innerText = (data)[counter].polish;
      }
      
    });
    const speak = () => {
      console.log('cos')
      var u = new SpeechSynthesisUtterance();
      u.text = (data)[counter].english;
      u.lang = 'us-US';
      u.rate = 1.2;
      // u.onend = function(event) { alert('Finished in ' + event.elapsedTime + ' seconds.'); }
      speechSynthesis.speak(u);
    }

    speaker.addEventListener('click', speak);
      console.log(data[0]);
      console.log((data)[1].english);
      console.log((data)[1].polish);    
    });
    


flipCard.addEventListener('click', () => {
     flipCard.classList.toggle("flipped")
     speaker.classList.toggle('hide');
});


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
      english: inputE,
      polish: inputP,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  message2.classList.toggle('visible');
  
     }
  e.preventDefault();
}

const form = document.querySelector('#form');
form.addEventListener('submit', addData);

close.addEventListener('click', () => {
  message1.classList.toggle('visible');
});

close.addEventListener('click', () => {
  message2.classList.toggle('visible');
});