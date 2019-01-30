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


///////////////////     Background   //////////////////
const bgColor = document.querySelector('body');
bgColor.addEventListener('keydown', e =>{
	if (e.key == 'p')	
	e.target.style.backgroundColor = 'pink';

	bgColor.addEventListener('keyup', e =>{
			e.target.style.backgroundColor = 'white';
		}, 1000);
	});

bgColor.addEventListener('keydown', e =>{
	if (e.key == 't')	
	e.target.style.backgroundColor = 'tan';
	bgColor.addEventListener('keyup', e =>{
		e.target.style.backgroundColor = 'white';
	}, 1000);
});

///////////////////     Welcome to Fun Bus   //////////////////
const funB = document.querySelector('.intro h2');
funB.addEventListener('mouseleave', e =>{
	e.target.style.backgroundColor = 'pink';
	e.target.style.color = 'white';

	setTimeout(function() {
		e.target.style.backgroundColor = '';
		e.target.style.color = '';
			}, 1000);
		}, false);


///////////////////    h2 tags   //////////////////

const H2tags = document.querySelectorAll('.text-content h2');
H2tags[0].addEventListener('dblclick', e =>{
	e.target.style.fontSize = '16rem';
	e.target.style.color = 'silver';
	e.stopPropagation();

	setTimeout(function() {
		e.target.style.fontSize = '';
		e.target.style.color = '';
			}, 1000);
		}, false);
H2tags[1].addEventListener('dblclick', e =>{
	e.target.style.fontSize = '16rem';
	e.target.style.color = 'silver';
	e.stopPropagation();

	setTimeout(() => {
		e.target.style.fontSize = '';
		e.target.style.color = '';
			}, 1000);
		}, false);


//////////////   Individual Backgrounds ///////////
const bodies = document.querySelector('.home');
bodies.addEventListener('dblclick', e =>{
		e.target.style.backgroundColor = 'yellow';
setTimeout(function() {
		e.target.style.backgroundColor = '';
			}, 100);
		}, false);


//////////////    intro img ////////////////
const inImg = document.querySelector('header img');
inImg.addEventListener('wheel', e =>{
	let random = Math.random()
	e.target.style.opacity = random;
	e.preventDefault();
	});


//////////////    bottom h4 tags  ////////////////
const desH4 = document.querySelectorAll('.destination h4');
desH4[0].addEventListener('keypress', e => {
	if (e.key === 'a')
		e.target.style.color = 'pink';    
	});
	
	// let adventure = document.querySelector('.map');
	// window.addEventListener('drag', (e) => {
	// 	adventure.classList.add('greyscale');
	// }); 

const firstPImg = document.querySelector('.img-content');
window.addEventListener('drag', e => {
	//console.log('dragging');
	firstPImg.classList.add('blue');
	}); 

//////////////    bottom h4 tags  ////////////////
window.addEventListener('load', function(){
alert('Welcome to the Fun Bus')
});
 

	// mouseenter
	// mouseover
	// click
	// keydown
	// keyup
	// mouseleave
	// dblclick
	// wheel
	// drag
	//load