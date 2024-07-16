document.getElementById('clocl');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// css
//  body {
//         background-color: #212121;
//         color: #fff;
//       }
//       .center {
//         display: flex;
//         height: 100vh;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//       }
//       #clock {
//         font-size: 40px;
//         background-color: purple;
//         padding: 20px 50px;
//         margin-top: 10px;
//         border-radius: 10px;
//       }