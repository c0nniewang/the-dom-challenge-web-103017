document.addEventListener("load", setInterval(incrementTime, 1000));

let counterNumber = document.getElementById("counter")
let seconds = 0
let pause = false

function incrementTime() {
  if (pause === true){
    seconds
  } else {
    counterNumber.innerText = seconds++
  }
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

  document.querySelector(".likes").appendChild(likedBullets)
}

document.getElementById("pause").addEventListener("click", pauseGame)

function pauseGame() {
  pause = !pause
  if (pause === true){
    document.getElementById("+").disabled = true;
    document.getElementById("-").disabled = true;
    document.getElementById("<3").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("pause").innerText = "resume"
  } else {
    document.getElementById("+").disabled = false;
    document.getElementById("-").disabled = false;
    document.getElementById("<3").disabled = false;
    document.getElementById("submit").disabled = false;
    document.getElementById("pause").innerText = "pause"
  }
}

document.getElementById("submit").addEventListener("click", addComment)

function addComment(event) {
  event.preventDefault()
  let comment = document.getElementsByTagName("input")[0].value
  let commentPost = document.createElement('p')
  commentPost.innerText = comment
   document.getElementById("list").appendChild(commentPost)
}



