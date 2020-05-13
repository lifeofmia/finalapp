var button = document.getElementById('changeBackground');

function backgroundChange() {
  var Color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = Color;
}

function random(num) {
    return Math.floor(Math.random()*(num+1));
}

button.addEventListener('click', backgroundChange);
