const rocket = document.getElementById("rocket");
const button = document.getElementById("startBtn");
const status = document.getElementById("status");

function animateElement(element, keyframes, options){
    return element.animate(keyframes, options).finished;
}

async function launchRocket(){

    button.disabled = true;
    status.textContent = "Preparing for launch...";

    // Lift off
    await animateElement(
        rocket,
        [
            {transform:"translateX(-50%) translateY(0px)"},
            {transform:"translateX(-50%) translateY(-180px)"}
        ],
        {
            duration:1200,
            fill:"forwards",
            easing:"ease-in"
        }
    );

    status.textContent="Rocket is flying!";

    // Tilt
    await animateElement(
        rocket,
        [
            {transform:"translateX(-50%) translateY(-180px) rotate(0deg)"},
            {transform:"translateX(-50%) translateY(-180px) rotate(-20deg)"}
        ],
        {
            duration:800,
            fill:"forwards"
        }
    );

    // Boost
    await animateElement(
        rocket,
        [
            {transform:"translateX(-50%) translateY(-180px) rotate(-20deg) scale(1)"},
            {transform:"translateX(-50%) translateY(-180px) rotate(-20deg) scale(1.4)"}
        ],
        {
            duration:700,
            fill:"forwards"
        }
    );

    // Rainbow color effect
    await animateElement(
        rocket,
        [
            {filter:"hue-rotate(0deg)"},
            {filter:"hue-rotate(360deg)"}
        ],
        {
            duration:1200,
            fill:"forwards"
        }
    );

    status.textContent="🎉 Mission Complete!";
    button.disabled = false;
}

button.addEventListener("click", launchRocket);
