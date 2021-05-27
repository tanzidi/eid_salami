
const btnSubmit = document.querySelector(".submit"),
    showModal = document.querySelector(".modalSurvey"),
    closeModal = document.querySelector(".modalSurvey__close"),
    shadow = document.querySelector(".overlay"),
    name1 = document.querySelector(".modalSurvey__name"),
    tk = document.querySelector(".tk1"),
    mimage = document.querySelector(".myimage"),
    mobile = document.querySelector(".p3"),
    confirm = document.querySelector(".modalSurvey__confirm"),
    myinvo = document.querySelector(".modalSurvey__invoice");
showModal.classList.add("hidden"), shadow.classList.add("hidden");
const taka = document.getElementById("inputTaka"),
    val = 90 * Math.random() + 10;
taka.value = Math.floor(val) + " taka";
const money = Math.floor(val);

function makeid(e) {
    for (var t = [], o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = o.length, a = 0; a < e; a++) t.push(o.charAt(Math.floor(Math.random() * n)));
    return t.join("")
}
tk.textContent = `${money} TK`, btnSubmit.addEventListener("click", (function(e) {
    e.preventDefault(), showModal.classList.remove("hidden"), shadow.classList.remove("hidden"), document.getElementById("paymentOption1").checked ? (console.log("y1"), mimage.src = "images/bkash.svg") : document.getElementById("paymentOption2").checked && (console.log("y2"), mimage.src = "images/rocket.png"), document.getElementById("paymentOption3").checked && (console.log("y3"), mimage.src = "images/nagad.png"), name1.textContent = document.getElementById("inputName").value, tk.textContent = document.getElementById("inputTaka").value, mobile.textContent = document.getElementById("inputMobile").value;
    const t = makeid(15);
    myinvo.textContent = `${t}`
})), closeModal.addEventListener("click", (function() {
    showModal.classList.add("hidden"), shadow.classList.add("hidden");
    const e = document.getElementById("inputTaka"),
        t = 90 * Math.random() + 10;
    e.value = Math.floor(t) + " taka";
    const o = Math.floor(t);
    tk.textContent = `${o} TK`
})), confirm.addEventListener("click", (function() {
    showModal.classList.add("hidden")
}));