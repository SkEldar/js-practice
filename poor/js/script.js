let h1 = document.getElementById("h1");
let timerId = setInterval(() => (h1.innerHTML = "I'm poor!"), 2000);
setTimeout(() => {
  clearInterval(timerId);
  h1.innerHTML = " ";
}, 5000);
let rock = "rock";
let paper = "paper";
let sizer = "scissors";
