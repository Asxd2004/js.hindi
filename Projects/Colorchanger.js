const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// CSS
// html {
//   margin: 0;
// }

// span {
//   display: block;
// }
// .canvas {
//   margin: 100px auto 100px;
//   width: 80%;
//   text-align: center;
// }

// .button {
//   width: 100px;
//   height: 100px;
//   border: solid black 2px;
//   display: inline-block;
// }

// #grey {
//   background: grey;
// }

// #black {
//   background: black;
// }
// #blue {
//   background: blue;
// }
// #yellow {
//   background: yellow;
// }
// #purple {
//   background: purple;
// }
// #pink {
//   background: pink;
// }
// #green {
//   background: green;
// }
// #orange {
//   background: orange;
// }
