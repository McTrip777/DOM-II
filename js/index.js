// Your code goes here

const homeBtn = document.querySelector('.nav-link1')

homeBtn.addEventListener('mouseover', e =>{
  console.log('I am a double click')
});

const h1Key = document.querySelector('.logo-heading')

h1Key.addEventListener('keydown', e =>{
  console.log('I am a keydown')
});

const aboutUsBtn = document.querySelector('.nav-link2')

aboutUsBtn.addEventListener('wheel', e =>{
  console.log('I am a wheel')
});