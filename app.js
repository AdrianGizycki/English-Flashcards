
const divContents1 = document.querySelector(".flip-card-front");
const divContents2 = document.querySelector(".flip-card-back");
const btnBeck = document.querySelector(".btn1");
const btnNext = document.querySelector(".btn2");
const btnToggle = document.querySelector(".btn3");
const flipCard = document.querySelector('.flip-card');
const base = document.querySelector('.data');
const addBtn = document.querySelector('.add');



fetch('https://my-json-server.typicode.com/AdrianGizycki/Test2/data/')

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
      
      console.log(data[0]);
      console.log((data)[1].english);
      console.log((data)[1].polish);
    
      
    });
    
addBtn.addEventListener('submit', function postData(){
});

flipCard.addEventListener('click', () => {
     flipCard.classList.toggle("flipped")
});

function addData(e) {
  const inputE = document.querySelector('.inputEng').value;
  const inputP = document.querySelector('.inputPl').value;
  fetch('https://my-json-server.typicode.com/AdrianGizycki/Test2/data/', {
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

  e.preventDefault();
}

const form = document.querySelector('#form');
form.addEventListener('submit', addData);

