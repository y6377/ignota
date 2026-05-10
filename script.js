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
