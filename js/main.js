console.log('Working');

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';


document.getElementById('greeting').innerHTML = greet;

console.log(greet);

// function expandNav() {
//   var nav = document.getElementById('Nav');
//   if (nav.className === 'navigation') {
//     nav.className += ' responsive';
//   } else {
//     nav.className = 'navigation';
//   }
// }


// window.onscroll = () => {
//   const nav = document.querySelector('#nav');
//   if (this.scrollY <= 10) nav.className = 'navigation';
//   else nav.className = 'changeColor';
// };

// document.addEventListener("DOMContentLoaded", function(event) {
//   var test = document.querySelector('.test');
//   var copy = document.querySelector('.copy-right');


//   function resize() {
//     if (window.innerWidth <= 500) {
//       test.classList.add('mobile');
//       // test.classList.toggle('remove');
//       copy.classList.add('remove');
//     } else {
//       test.classList.remove('mobile');
//       copy.classList.remove('remove');
//     }
//   }
//   window.onresize = resize;
// });