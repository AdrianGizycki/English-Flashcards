
const divContents1 = document.querySelector(".flip-card-front");
const divContents2 = document.querySelector(".flip-card-back");
const btnBeck = document.querySelector(".btn1");
const btnNext = document.querySelector(".btn2");
const btnToggle = document.querySelector(".btn3");
const flipCard = document.querySelector('.flip-card');
const base = document.querySelector('.data');
const addBtn = document.querySelector('.add');
console.log(addBtn);


fetch('https://my-json-server.typicode.com/AdrianGizycki/Test2/data/')

  .then(response => response.json())

  .then((data) => {
    const min = 0
    var max = data.length;
    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 32) {
      const counter = Math.floor(Math.random() * (max - min)) + min;
      divContents1.innerText = (data)[counter].english;
      divContents2.innerText = (data)[counter].polish;
      }
    });
      
      console.log(data[0]);
      console.log((data)[1].english);
      console.log((data)[1].polish);
    data.forEach(function(data) {
      // console.log(data);
      // console.log(data.english);
      var dataId = (data.id);
   //   console.log(data["id"]);
      
    });

  });

  let inputE = document.querySelector('.inputEng').value;
  let inputP = document.querySelector('.inputPl').value;
  const formData = new FormData();
  formData.append("english", "bird"),
  formData.append("polish", "ptak"), 
 
    
function postData(event){
  event.preventDefault();

    fetch('https://my-json-server.typicode.com/AdrianGizycki/Test2/data/', {
        method: 'POST',
        body: formData
    })
    .then((res) => res.json())
    .then(res => {
      console.log(res);
    })  
};

addBtn.addEventListener('click', function postData(){
});

flipCard.addEventListener('click', () => {
     console.log("test");
     flipCard.classList.toggle("flipped")
});



fetch('https://my-json-server.typicode.com/AdrianGizycki/Test2/data/', {
    method: 'POST',
    body: JSON.stringify({
      english: 'foo',
      polish: 'bar',
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
