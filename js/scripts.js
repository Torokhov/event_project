/*var field = document.querySelector("input");
field.addEventListener("keyup", function(event) {
  if (event.keyCode === 81 || event.keyCode === 87 || event.keyCode === 88) {
    field.value = field.value.slice(0, -1);
  }
}); */

function asTabs(node) {
  var children = node.children;
  var btn;
  
  var fragment = document.createDocumentFragment();
  
  Array.prototype.forEach.call(children, function(elem, i, children) {
    elem.setAttribute("id", "tab" + i);
    elem.setAttribute("class", "tab");
    
    btn = document.createElement("button");
    btn.textContent = elem.textContent;
    btn.setAttribute("data-number", i);
    btn.addEventListener("click", function(event) {
      var tabsVisible = document.getElementsByClassName("tab--visible");
      tabsVisible[0].classList.remove("tab--visible");
      
      var tab = document.getElementById("tab" + this.getAttribute("data-number"));
      
      tab.classList.add("tab--visible");
    });
    
    fragment.appendChild(btn);
  });
  
  node.insertBefore(fragment, node.firstChild);
  document.getElementById("tab0").classList.add("tab--visible");
}

asTabs(document.getElementById("wrapper"));
