const box = document.getElementById("box");

function animateElement(element, keyframes, options) {
  return element.animate(keyframes, options).finished;
}

async function runAnimations() {
  try {
    // Move right
    await animateElement(
      box,
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(300px)" }
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    );

    // Change color
    await animateElement(
      box,
      [
        { backgroundColor: "royalblue" },
        { backgroundColor: "crimson" }
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    );

    // Rotate
    await animateElement(
      box,
      [
        { transform: "translateX(300px) rotate(0deg)" },
        { transform: "translateX(300px) rotate(360deg)" }
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    );

    // Scale up
    await animateElement(
      box,
      [
        { transform: "translateX(300px) rotate(360deg) scale(1)" },
        { transform: "translateX(300px) rotate(360deg) scale(1.5)" }
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    );

    console.log("All animations completed!");
  } catch (error) {
    console.error("Animation failed:", error);
  }
}

runAnimations();