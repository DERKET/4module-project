var max = 1.5;
var min = 1;
var current = 1;
var h1_font_size = 40;
var p_font_size = 20;
var inc_btn = document.querySelector(".inc-btn");
var dec_btn = document.querySelector(".dec-btn");
inc_btn.addEventListener("click", function () {
    if (current < max) {
        current += 0.1;
        set_font_size();
    }
});
dec_btn.addEventListener("click", function () {
    if (current > min) {
        current -= 0.1;
        set_font_size();
    }
});
function set_font_size() {
    var all_h1 = document.querySelectorAll("h1");
    var all_p = document.querySelectorAll("p");
    for (var i = 0; i < all_h1.length; i++) {
        all_h1[i].style.fontSize = h1_font_size * current + "px";
    }
    for (var i = 0; i < all_p.length; i++) {
        all_p[i].style.fontSize = p_font_size * current + "px";
    }
    var size_stat = document.querySelector(".size-stat");
    document.querySelector(".size-stat .value").innerHTML = (current * 100).toFixed(0) + "px";
    size_stat.classList.add("opened");
    setTimeout(function () {
        size_stat.classList.remove("opened");
    }, 1000);
}
