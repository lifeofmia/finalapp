var button = document.getElementById('changeBackground');

function backgroundChange() {
  var Color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = Color;
}

function random(num) {
    return Math.floor(Math.random()*(num+1));
}

button.addEventListener('click', backgroundChange);

document.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  if ( event.target.className == "droptarget" ) {
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
});
