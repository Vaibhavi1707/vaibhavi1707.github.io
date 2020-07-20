window.onload = function () {
    Particles.init({
        selector: '.background',
        connectParticles: 'true',
        color: '#000000',
        maxParticles: 300
  });
};

// TYPING EFFECT

const typing = document.getElementsByClassName('typed-text');
const cursors = document.getElementsByClassName('cursor');
const cursor = cursors[0]

const textArray = ['Hello World :)']
const newTextDelay = 500;
const newCharDelay = 200;
const eraseCharDelay = 100;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    console.log("%%%%%%%%%%%");
    if (!cursor.classList.contains('typing'))
      cursor.classList.add('typing')
    typing[0].textContent += textArray[textArrayIndex][charIndex];
    charIndex ++;
    setTimeout(type, newCharDelay);
  }
  else {
    cursor.classList.remove('typing')
    setTimeout(erase, newTextDelay);
  }
}

erase = () => {
  if (charIndex > 0) {
    if (!cursor.classList.contains('typing'))
      cursor.classList.add('typing')
    typing[0].textContent = textArray[textArrayIndex].substring(0, charIndex -1);
    charIndex --;
    setTimeout(erase, eraseCharDelay);
  }
  else {
    cursor.classList.remove('typing')
    textArrayIndex ++;
    textArrayIndex %= textArray.length;
    setTimeout(type, newTextDelay);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, newTextDelay);
});