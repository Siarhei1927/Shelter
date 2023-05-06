document.addEventListener("DOMContentLoaded", function () {
    var body = document.querySelector("body");
    var menu = document.getElementById("burger");
    menu.addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open");
    })

    document.getElementById("link-text-color").addEventListener("click", function cozyAlert() {
        alert("Welcome to Cozy House")
    })
    document.getElementById("inAddition-button").addEventListener("click", function cardAlert() {
        alert("Thank You for your donation! You credit card number: 8380 2880 8028 8791 7435")
    })
});

