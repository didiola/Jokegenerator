const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = "Something went wrong (Not Funny)";
      }
    }
  };

  xhr.send();
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);

// const xhr = new XMLHttpRequest();

// // xhr.open("GET", "./movies.json");
// xhr.open("GET", "https://api.github.com/users/bradtraversy/repos");

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);

//     data.forEach((repo) => {
//       const li = document.createElement("li");
//       li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
//       document.querySelector("#results").appendChild(li);
//     });
//   }
// };

// xhr.send()
