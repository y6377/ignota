const loginBtn = document.getElementById("loginBtn");

if(loginBtn){
  loginBtn.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}

/* =========================
   타이핑 효과
========================= */

const title = document.getElementById("typing-title");

if(title){

  const text = "IGNOTA";

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
