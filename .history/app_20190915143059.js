const englishWords = ['above', 'across', 'act',]
const polishWords = ['powyżej / nad / u góry', 'przez coś', 'akt / czyn / działanie']
if (englishWords !== polishWords) {
    console.log('ok')
} else {
    console.log('not ok')
}
// const englishWords = ['above', 'across', 'act', 'ahead', 'along',]
//  'among', 'amount', 'any', 'anyone', 'appear', 'approach', 'arms', 'around', 'art', 'as', 'attack', 'attempt', 'august', 'autumn', 'away', 'base', 'bear', 'become', 'began', 'beginning', 'behind', 'believe', 'belong', 'below', 'beyound', 'bill', 'bit', 'block', 'blood', 'blow', 'board', 'bottom', 'branch', 'break', 'bridge', 'bright', 'building', 'burn', 'capital', 'carry', 'case', 'cause', 'central', 'centre', 'century', 'certain', 'certainly', 'claim', 'coat', 'common', 'complete', 'concern', 'conditio', 'consider', 'continue', 'control', 'corner', 'count'];
// const polishWords = ['powyżej / nad / u góry', 'przez coś', 'akt / czyn / działanie', 'przed', 'wzdłuż', 'między / pośród', 'ilość', 'jakikolwiek', 'nikt', 'pojawić się', 'podejście', 'herb / uzbrojony', 'wokół / dookoła / w pobliżu', 'sztuka', 'jako/ tak jak', 'atak', 'próba', 'sierpień', 'jesień', 'od /daleko / z dala / z daleka', 'podstawa', 'niedźwiedź', 'zostać', 'rozpoczął', 'początek', 'za / z tyłu', 'wierzyć', 'należeć', 'poniżej', 'poza', 'za (czymś)', 'po drugiej stronie (czegoś)', 'dalej', 'projekt ustawy', 'rachunek', 'kawałek', 'klocek', 'krew', 'cios / dmuchać / wiać', 'deska', 'dolny', 'oddział / gałąź / rozgałęzienie', 'most', 'jasny', 'budynek', 'oparzenie', 'stolica', 'nieść', 'przypadek / walizka', 'przyczyna / powód', 'centralny / środkowy', 'środek', 'wiek', 'pewny', 'rzeczywiście / z pewnością / na pewno', 'roszczenie', 'sierść / powlekać / płaszcz / okrywać cienką warstwą', 'pospolity', 'cały / całkowity / pełny', 'troska', 'warunek', 'rozważać', 'kontynuować', 'kontrola', 'róg / narożnik', 'liczba / liczyć się']
const divContents1 = document.querySelector(".divContents1");
const divContents2 = document.querySelector(".divContents2");
const btnBeck = document.querySelector(".btn1");
const btnNext = document.querySelector(".btn2");
const btnToggle = document.querySelector(".btn3");
const visCard = document.querySelector(".flip-card-front");
const unvisCard = document.querySelector(".flip-card-back");
const flipCard = document.querySelector('.flip-card-inner');
const max = englishWords.length;
const min = 0


var counter = Math.floor(Math.random() * (max - min)) + min;
console.log(counter);
divContents1.innerText = englishWords[counter];
divContents2.innerText = polishWords[counter];


btnNext.addEventListener('click', function(){
  counter++;
  divContents1.innerText = englishWords[counter];
  divContents2.innerText = polishWords[counter];
  console.log(counter);
  if (counter === max) {
      counter = 0
  }
});

btnBeck.addEventListener('click', function(){
  counter--;
  divContents1.innerText = englishWords[counter];
  divContents2.innerText = polishWords[counter];
  console.log(counter);
  if (counter === 0) {
      counter = englishWords.length;
  }
});

// flipCard.addEventListener('click', () => {
//     console.log("test");
//     flipCard.style.transform = "rotateY(180deg)";
// });

// bPrev.addEventListener("click", function () {
//     allBeer[index].classList.remove("visible");
//     if (index === 0) {
//         index = allBeer.length;
//     }
//     index--;
//     allBeer[index].classList.add("visible");
// });

// bNext.addEventListener("click", function () {
//     allBeer[index].classList.remove("visible");
//     if (index === allBeer.length - 1) {
//         index = -1
//     }
//     index++;
//     allBeer[index].classList.add("visible");
// });