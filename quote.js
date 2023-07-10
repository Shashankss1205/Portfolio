const url = 'https://quotes88.p.rapidapi.com/random';
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd0d8bef418msh6f8e8efc4906034p194127jsnb10d5d9703bf',
    'X-RapidAPI-Host': 'quotes88.p.rapidapi.com'
  }
};


btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(url,options)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.quote}"`;
      author.innerHTML = `- ${data.author.name}`;
    });
}


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } 
// catch (error) {
// 	console.error(error);
// }












// const api = "https://api.quotable.io/random";

// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", getQuote);

// function getQuote() {
//   fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//       quote.innerHTML = `"${data.content}"`;
//       author.innerHTML = `- ${data.author}`;
//     });
// }
