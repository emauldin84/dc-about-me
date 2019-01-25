var myImage = document.querySelector('#img-eric');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Eric.png') {
    myImage.setAttribute ('src', 'images/Eric-freckles.png');
  } else if (mySrc === 'images/Eric-freckles.png') {
    myImage.setAttribute ('src', 'images/Eric-freckles-horns.png');
  } else if (mySrc === 'images/Eric-freckles-horns.png') {
    myImage.setAttribute ('src', 'images/Eric-freckles-horns-patch.png');
  } else if (mySrc === 'images/Eric-freckles-horns-patch.png') {
    myImage.setAttribute ('src', 'images/Eric-freckles-horns-patch-earring.png');
  } else {
    myImage.setAttribute ('src', 'images/Eric.png')
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to Eric\'s About Me page, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Eric\'s About Me page, ' + storedName +'!';
}

myButton.onclick = function() {
  setUserName();
}
