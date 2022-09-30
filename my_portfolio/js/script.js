document.querySelector(".btn").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".box").classList.toggle("open");
});

