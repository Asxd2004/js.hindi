const form = document.querySelector('form');
// This usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

//css
// .container {
//   width: 575px;
//   height: 825px;

//   background-color: #797978;
//   padding-left: 30px;
// }
// #height,
// #weight {
//   width: 150px;
//   height: 25px;
//   margin-top: 30px;
// }

// #weight-guide {
//   margin-left: 75px;
//   margin-top: 25px;
// }

// #results {
//   font-size: 35px;
//   margin-left: 90px;
//   margin-top: 20px;
//   color: rgb(241, 241, 241);
// }

// button {
//   width: 200px;
//   height: 45px;
//   margin-left: 90px;
//   margin-top: 25px;
//   background-color: #fff;
//   padding: 1px 30px;
//   border-radius: 8px;
//   color: #212121;
//   text-decoration: none;
//   border: 2px solid #212121;

//   font-size: 25px;
// }

// h1 {
//   padding-left: 15px;
//   padding-top: 25px;
// }
