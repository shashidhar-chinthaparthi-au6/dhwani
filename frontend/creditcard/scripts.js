// const numberField = document.querySelector("#card-number")
// const nameField = document.querySelector("#name")
// const expirationField = document.querySelector("#expiration")
// const securityCodeField = document.querySelector("#security-code")

// const nameInput = document.querySelector("#name-input")
// const numberInput = document.querySelector("#number-input")
// const expirationInput = document.querySelector("#expiration-input")
// const securityCodeInput = document.querySelector("#security-code-input")


var container = document.getElementsByClassName("container")[0];
container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementsByClassName("number-input-class");
    var first = inputValue[0].value;
    var second = inputValue[1].value;
    var third =inputValue[2].value;
    var fourth = inputValue[3].value;
    var fullDigit = first + second + third + fourth;
    var t = document.createTextNode(fullDigit);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    var emptyInputValue = document.getElementsByClassName("number-input-class");
    for(i=0;i<4;i++){
        emptyInputValue[i].value = ""
    }
  
    var span = document.createElement("SPAN");
    var txt = document.createElement("BUTTON");
    txt.innerHTML = "Delete" 
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createElement("BUTTON");
  txt.innerHTML = "Delete" 
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



