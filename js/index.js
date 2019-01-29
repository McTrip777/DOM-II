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
    

const homeBtn = document.querySelectorAll('a');
homeBtn[0].addEventListener("mouseenter", e => {   
	// highlight the mouseenter target
	e.target.style.color = "purple";
	// reset the color after a short delay
	setTimeout(function() {
		e.target.style.color = "";
	}, 1500);
}, false);
homeBtn[1].addEventListener("mouseenter", e => {   
	// highlight the mouseenter target
	e.target.style.color = "orange";
	// reset the color after a short delay
	setTimeout(function() {
		e.target.style.color = "";
	}, 1500);
}, false);
homeBtn[2].addEventListener("mouseenter", e => {   
	// highlight the mouseenter target
	e.target.style.color = "blue";
	// reset the color after a short delay
	setTimeout(function() {
		e.target.style.color = "";
	}, 1500);
}, false);
homeBtn[3].addEventListener("mouseenter", e => {   
	// highlight the mouseenter target
	e.target.style.color = "red";
	// reset the color after a short delay
	setTimeout(function() {
		e.target.style.color = "";
	}, 1500);
}, false);

const buttonSize = document.querySelector('.btn1');
buttonSize.addEventListener('mouseover', e =>{
	e.target.style.fontsize = 50;
});

/*
const aboutUsBtn = document.querySelector('.nav-link2')

aboutUsBtn.addEventListener('click', e =>{
  console.log('I am a click')
});

const blogBtn = document.querySelector('.nav-link3')

blogBtn.addEventListener('dblclick', e =>{
  console.log('I am a double click')
});
*/