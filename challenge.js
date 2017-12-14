document.addEventListener("load", setInterval(incrementTime, 1000));

let counterNumber = document.getElementById("counter")
let seconds = 0;

function incrementTime() {
  counterNumber.innerText = seconds++
}

document.getElementById("+").addEventListener("click", increment);

function increment() {
  counterNumber.innerText = seconds++
}

document.getElementById("-").addEventListener("click", decrement);

function decrement() {
  counterNumber.innerText = seconds--
}

document.getElementById("<3").addEventListener("click", addLikes)

let likedNumbers = {}

function addLikes() {
  if (likedNumbers[seconds] === undefined) {
    likedNumbers[seconds] = 1;
  } else {
    likedNumbers[seconds] += 1;
  }

  let likedBullets = document.createElement('li');

  likedBullets.innerHTML = `${seconds} has been liked ${likedNumbers[seconds]} time(s).`
  console.log(likedBullets)

  document.querySelector(".likes").appendChild(likedBullets)
}




