function abrirConvite() {

    const envelope =
        document.getElementById("tela-envelope");

    const convite =
        document.getElementById("tela-convite");

    if (!envelope || !convite) {
        return;
    }

    envelope.classList.add("abrindo");

    setTimeout(function () {
        convite.classList.add("visivel");
    }, 400);

    setTimeout(function () {
        envelope.classList.add("saindo");
    }, 900);
}


document.addEventListener("DOMContentLoaded", function () {

    const parametros =
        new URLSearchParams(window.location.search);

    if (parametros.get("convite") !== "aberto") {
        return;
    }

    const envelope =
        document.getElementById("tela-envelope");

    const convite =
        document.getElementById("tela-convite");

    if (!envelope || !convite) {
        return;
    }

    envelope.style.display = "none";

    convite.classList.add("visivel");
});
