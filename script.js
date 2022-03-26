const allItems = document.getElementById("allItems");
const inputValue = document.getElementById("userInput");
const clear = document.getElementById("clear");

// Clears all items on list
clear.addEventListener("click", function(){
    allItems.innerHTML = "";
})

// Creates a new list item when clicking on the "Add" button
function newElement() {
    var listItem = document.createElement("li");
    var inputValue = userInput.value;
    var newItem = document.createTextNode(inputValue);
    listItem.appendChild(newItem);
    if (inputValue === '') {
    } else {
      allItems.appendChild(listItem);
    }
    document.getElementById("userInput").value = "";
  
    var span = document.createElement("span");
    var x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    listItem.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

// Creates a new list item when user hits "Enter"
userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
        newElement();
})

// Creates and appends 'x' to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  myNodelist[i].appendChild(span);
}

// Click on "x" to remove the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Cross out/hide a list item when selected
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('strikeOut');
  }
}, false);