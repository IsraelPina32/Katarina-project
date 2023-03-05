const video = document.getElementById("video");
const botaoGameplay = document.querySelector(".btn-home");
const modal = document.querySelector(".modal");
const linkVideo = video.src;
function AlternaModal(){
    modal.classList.toggle("aberto");
};

botaoGameplay.addEventListener("click", () => {
    AlternaModal();
    video.setAttribute("src", linkVideo);
});

const BotaoFechaModal = document.querySelector(".fechar-modal");

BotaoFechaModal.addEventListener("click", () => {
    AlternaModal();
    video.setAttribute("src", linkVideo);
});

