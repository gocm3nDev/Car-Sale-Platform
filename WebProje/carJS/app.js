
//Giriş yapıldıysa giriş yap yerine kullanıcı adını göster
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("UN");
  const username = localStorage.getItem("username");

  if (username) {
      loginButton.textContent = `Merhaba, ${username}`;
  }
});

//chat butonu
const toggleButton = document.getElementById('togglePanel');
const closeButton = document.getElementById('closePanel');
const panel = document.getElementById('myPanel');

toggleButton.addEventListener('click', () => {
  panel.classList.add('open'); // Paneli aç
});

closeButton.addEventListener('click', () => {
  panel.classList.remove('open');
});

//Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}

