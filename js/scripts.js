var field = document.querySelector("input");
field.addEventListener("keyup", function(event) {
  if (event.keyCode === 81 || event.keyCode === 87 || event.keyCode === 88) {
    field.value = field.value.slice(0, -1);
  }
});
