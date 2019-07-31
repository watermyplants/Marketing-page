console.log('Working');

function expandNav() {
  var nav = document.getElementById('Nav');
  if (nav.className === 'navigation') {
    nav.className += ' responsive';
  } else {
    nav.className = 'navigation';
  }
}
