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
    
///////////////////     NAV BAR //////////////////
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


///////////////////     Buttons   //////////////////
const buttonSize1 = document.querySelector('.btn1');
buttonSize1.addEventListener('mouseover', e =>{
	e.target.innerHTML = "SIGN!";
	e.target.style.color = "white";
	e.target.style.backgroundColor = "black";
setTimeout(function() {
		e.target.innerHTML = "Sign Me up!";
		e.target.style.backgroundColor = "";
	}, 3000);
}, false);

const buttonSize2 = document.querySelector('.btn2');
buttonSize2.addEventListener('mouseover', e =>{
	e.target.innerHTML = "ME!";
	e.target.style.color = "white";
	e.target.style.backgroundColor = "black";
setTimeout(function() {
		e.target.innerHTML = "Sign Me up!";
		e.target.style.backgroundColor = "";

	}, 3000);
}, false);

const buttonSize3 = document.querySelector('.btn3');
buttonSize3.addEventListener('mouseover', e =>{
	e.target.innerHTML = "UP!";
	e.target.style.color = "white";
	e.target.style.backgroundColor = "black";
setTimeout(function() {
		e.target.innerHTML = "Sign Me up!";
		e.target.style.backgroundColor = "";

	}, 3000);
}, false);

///////////////////     Bottom Image   //////////////////
const btmImg = document.querySelector('.content-destination img');
btmImg.addEventListener('click', e =>{
	e.target.style.height = "30rem";
	e.preventDefault();
setTimeout(function() {
	e.target.style.height = "20rem";
	}, 100);
}, false);


///////////////////     Welcome to Fun Bus   //////////////////
const bgColor = document.querySelector('body');
bgColor.addEventListener('keydown', e =>{
	if (e.key == 'p')	
	e.target.style.backgroundColor = 'pink'
});
bgColor.addEventListener('keydown', e =>{
	if (e.key == 'b')	
	e.target.style.backgroundColor = 'blue';
	e.target.style.color = 'white';
});









