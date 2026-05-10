const humanCheck = document.getElementById("human-check");

if(humanCheck){

  humanCheck.addEventListener("change", () => {

    if(humanCheck.checked){

      setTimeout(() => {

        window.location.href = "home.html";

      }, 800);
    }
  });
}

/* =========================
   타이핑 효과
========================= */

const title = document.getElementById("typing-title");

if(title){

  const text = "ARTIFICIAL PLANET:IGNOTA";

  let index = 0;

  function typeText(){

    if(index < text.length){

      title.innerHTML += text.charAt(index);

      index++;

      setTimeout(typeText, 120);
    }
  }

  typeText();
}

const cursor = document.querySelector(".custom-cursor");
const coords = document.querySelector(".cursor-coords");

if(cursor){

  document.addEventListener("mousemove", (e) => {

    cursor.style.transform =
    `translate(${e.clientX}px, ${e.clientY}px)`;

    coords.textContent =
    `X:${e.clientX} Y:${e.clientY}`;
  });

}

const hoverTargets =
document.querySelectorAll("a, button, .checkbox-container");

hoverTargets.forEach((item) => {

  item.addEventListener("mouseenter", () => {
    cursor.classList.add("hide-cursor");
  });

  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hide-cursor");
  });

});
