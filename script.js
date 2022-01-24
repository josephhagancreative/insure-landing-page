const mobileNav = document.querySelector(".navbar-collapse")
const toggleBtn = document.querySelector(".toggle-collapse")

let visible = false

toggleBtn.addEventListener("click", () => {
  visible = !visible
  mobileNav.classList.toggle("show")

  if (!visible) {
    toggleBtn.innerHTML = `<i class="fas fa-bars"></i>`
  } else {
    toggleBtn.innerHTML = `<i class="fas fa-times"></i>`
  }
})
