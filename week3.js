var myButton = document.getElementsByTagName("LI");
var x;
for (x = 0; x < myButton.length; x++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myButton[x].appendChild(span);
}


var close = document.getElementsByClassName("close");
var x;
for (x = 0; x < close.length; x++) {
  close[x].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var y = document.createTextNode(inputValue);
  li.appendChild(y);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var myInput = document.createElement("myInput");
  var txt = document.createTextNode("\u00D7");
  myInput.className = "close";
  myInput.appendChild(txt);
  li.appendChild(myInput);

  for (x = 0; x < close.length; x++) {
    close[x].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}