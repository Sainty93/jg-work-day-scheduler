const hour = new Date().getHours(); // 6, 10, 18

hour-9
hour-10
hour-11
hour-12
hour-13
hour-14
hour-15
hour-4
hour-5
hour-6
hour-7


var selectId;

// marking current Date
currentDateElement = document.querySelector(`#hour-${hour}`); // hour-12, hour-13
currentDateElement.textContent = 'Current Day';

// Current Day

var pastStart;
var pastEnd;
var futureStart;
var futureEnd;

pastStart = 9;
futureEnd = 19;

pastEnd = hour - 1;
futureStart = hour + 1;



for (let i = pastStart; i <= pastEnd; i++) {
  const selectId = `hour-{i}`;
  const selectedElement = document.querySelector(`#{selectId}`);
  selectedElement.classList.add("past");
}

for (let i = futureStart; i <= futureEnd; i++) {
  const selectId = `hour-{i}`;
  const selectedElement = document.querySelector(`#{selectId}`);
  selectedElement.classList.add("past");
}

// Future
for (let i = hour + 1; i < 23; i++) {
  // same previous block
  selectedElement.classList.add("future");
  
}



let userInputs = {};
userInputs = JSON.parse(localStorage.getItem('userInputs')); // undefined

storedItem = localStorage.getItem('userInputs');
userInputs = storedItem ? storedItem : {}; // shorthand if condition


userInputs['20'] = 'some text here';

localStorage.setItem('userInputs', JSON.stringify(userInputs));

userInputs = JSON.parse(localStorage.getItem('userInputs'));

// for ... in
for (const hourDigit in userInputs) {
  const targetElement = document.querySelector(`#hour-${hourDigit}`); // hour-14
  targetElement.textContent = userInputs[hourDigit];
}