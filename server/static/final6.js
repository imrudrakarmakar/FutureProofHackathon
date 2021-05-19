var homepage = document.getElementById('wholehomepage');
var signinpage = document.getElementById('wholesigninpage');
var publishpage = document.getElementById('wholepublishpage');


var pubbtn = document.getElementById('pubbtn');

pubbtn.addEventListener('click', function(){
  signinpage.style.display = 'block';
  homepage.style.display = 'none';
  publishpage.style.display = 'none';
});

var loginbtn = document.getElementById('loginbtn');
loginbtn.addEventListener('click',function(){
  signinpage.style.display = 'none';
  homepage.style.display = 'none';
  publishpage.style.display = 'block';
});

var pubbtnn = document.getElementById('pubbtn2');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var subject = document.getElementById('subject');


pubbtnn.addEventListener('click', function(){
  decideaction(fname.value, lname.value, subject.value);
});


var leftpanel = document.getElementById('leftpanel');

function decideaction(title, author, newtext){
	if ((title=='') || (author=='') || (newtext=='')){
		alert('Something is missing from your entries');
	}
	else {
		create_card(title, author);
	}
}


function create_card(title,author){
  signinpage.style.display = 'none';
  publishpage.style.display = 'none';
  homepage.style.display = 'block';
  
  var carddiv = document.createElement('div');
  carddiv.classList.add('card');

  var mb3div = document.createElement('div');
  mb3div.classList.add('card');
  mb3div.classList.add('mb-3');

  var nogutters = document.createElement('div');
  nogutters.classList.add('row');
  nogutters.classList.add('no-gutters');

  var colmd4 = document.createElement('div');
  colmd4.classList.add('col-md-4');

  var link = document.createElement('a');
  link.href = 'p1.html';

  var image = document.createElement('img');
  image.src = "/static/logo.jpeg";
  image.style.width = '100%';

  var colmd8 = document.createElement('div');
  colmd8.classList.add('col-md-8');

  var cardbody = document.createElement('div');
  cardbody.classList.add('card-body');

  var h5 = document.createElement('h5');
  h5.classList.add('card-title');

  var p1 = document.createElement('p');
  p1.classList.add('card-text');

  var p2 = document.createElement('p');
  p2.classList.add('card-text');

  p1.innerHTML = title;
  p2.innerHTML = 'By ' + author + ' | Updated: 7 June 2020 08:54 IST';
  h5.innerHTML = title;
  cardbody.appendChild(h5);
  cardbody.appendChild(p1);
  cardbody.appendChild(p2);
  colmd8.appendChild(cardbody);
  link.appendChild(image);
  colmd4.appendChild(link);
  nogutters.appendChild(colmd4);
  nogutters.appendChild(colmd8);
  mb3div.appendChild(nogutters);
  carddiv.appendChild(mb3div);
  leftpanel.appendChild(carddiv);
}