window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#190074",
    "#770000",
    "#d91bff",
    "#fffb10",
    "#0e26ff",
    "#3fe2ff"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", ()=> {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", ()=> {
      visual.removeChild(this);
    });
  };
});
