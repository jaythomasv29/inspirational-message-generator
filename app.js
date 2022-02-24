const messages = [
  'Believe in yourself',
  'Just do it',
  'Keep on pushin',
  'Im sleepy',
  'Lets eat!',
  'There is no "I" in Team.',
  'Capre Diem'
]

const myMessageTag = document.querySelector('.random-message h2');
const btnTag = document.querySelector('#msgBtn')
const randomColorCode = () => {
  const color = Math.floor(Math.random() * 256)
  return color;
}

const changeMessageColor = () => {
  document.querySelector('.random-message h2').style.color = `rgb(${randomColorCode()}, ${randomColorCode()} ,${randomColorCode()})`;
}

const backgroundColor = () => {
  document.querySelector('body').style.backgroundColor = `rgb(${randomColorCode()}, ${randomColorCode()} ,${randomColorCode()})`;
}

const generateMessage = () => {
  const randomNum = Math.floor(Math.random() * messages.length)
  changeMessageColor()
  myMessageTag.innerHTML = `"${messages[randomNum]}"`
}

btnTag.addEventListener('click', () => {
  generateMessage()
});

setInterval(() => {
  generateMessage()
}, 3000)