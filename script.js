function abrirConvite() {

    const envelope = document.getElementById("tela-envelope");
    const convite = document.getElementById("tela-convite");

    if (!envelope || !convite) {
        return;
    }

    envelope.classList.add("abrindo");

    setTimeout(function () {
        convite.classList.add("visivel");
    }, 350);

    setTimeout(function () {
        envelope.classList.add("saindo");
    }, 800);
}


/* ==================================
   VOLTAR DA LISTA PARA O CONVITE
================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (window.location.hash === "#convite") {

        const envelope =
            document.getElementById("tela-envelope");

        const convite =
            document.getElementById("tela-convite");

        if (envelope && convite) {

            envelope.style.display = "none";

            convite.classList.add("visivel");
        }
    }
});
