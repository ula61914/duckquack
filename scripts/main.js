var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/duck.jpeg') {
      myImage.setAttribute ('src','images/evilduck.jpeg');
    } else {
      myImage.setAttribute ('src','images/duck.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('You are...?');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Duck Quack, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Duck Quack, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('You are...?');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Duck Quack, ' + myName;
    }
  }