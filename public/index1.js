const input = document.getElementById("check")

input.addEventListener("click", function () {
    document.querySelector(".item").classList.toggle("check")
})