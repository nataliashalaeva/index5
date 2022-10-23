function calcul() {

    let form = document.forms.calculator;
    let p1 = form.elements.p1;
    let q1 = form.elements.q1;
    let p2 = form.elements.p2;
    let q2 = form.elements.q2;
    let p3 = form.elements.p3;
    let q3 = form.elements.q3;
    let r = document.getElementById("result");
    let res = p1.value * q1.value + p2.value * q2.value +p3.value * q3.value;
    if (res.isNaN) {
        r.innerHTML ="Ошибка";
    } else {
        r.innerHTML = "Сумма: " + res;
    }
}
window.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("my-button");
    button.addEventListener("click", calcul);
});