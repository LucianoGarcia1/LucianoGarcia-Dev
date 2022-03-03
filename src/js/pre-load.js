const pre_carregamento = document.querySelector(".pre-carregamento");

function preCarregamento(){
    pre_carregamento.style.opacity = "0";

    setTimeout(() => {
        pre_carregamento.style.display = "none";
    }, 1000);
}
