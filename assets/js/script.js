const counterDisplay = document.querySelector("h2");
// const successMessage = document.getElementById("sucessMessage");
let counter = 0;
// let displayMessage = false;
// let tempsPasse = 0;
// const startTime = new Date().getTime();
// const timeOnPage = () => {
//   tempsPasse = new Date().getTime() - startTime;
// };

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  //bubble size
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  // bubble basic position
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  // bubble direction
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  //bubble click event, increment counter and remove bubble
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  // bubble remove after 8s
  setTimeout(() => {
    bubble.remove();
  }, 8000);

  // if (counter === 10 && !displayMessage) {
  //   timeOnPage();
  //   displayMessage = true;
  //   const message = `Félicitations ! Vous venez de perdre ${tempsPasse} millisecondes sur la page`;
  //   successMessage.innerHTML = message;
  // }}
};
//bubbleMaker
setInterval(bubbleMaker, 600);
