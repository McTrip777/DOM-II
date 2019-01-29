// Your code goes here
    // * [ ] `mouseover`
	// * [ ] `keydown`
	// * [ ] `wheel`
	// * [ ] `drag / drop`
	// * [ ] `load`
	// * [ ] `focus`
	// * [ ] `resize`
	// * [ ] `scroll`
	// * [ ] `select`
    // * [ ] `dblclick`
    

const homeBtn = document.querySelector('.nav-link1')

homeBtn.addEventListener('mouseover', e =>{
  console.log('I am a mouseover')
});

const h1Key = document.querySelector('.logo-heading')

h1Key.addEventListener('keydown', e =>{
  console.log('I am a keydown')
});

const headerImg = document.querySelector('.intro img')

headerImg.addEventListener('wheel', e =>{
  console.log('I am a wheel')
});

const aboutUsBtn = document.querySelector('.nav-link2')

aboutUsBtn.addEventListener('click', e =>{
  console.log('I am a click')
});

const blogBtn = document.querySelector('.nav-link3')

blogBtn.addEventListener('dblclick', e =>{
  console.log('I am a double click')
});