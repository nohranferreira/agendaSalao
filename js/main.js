const btnSalvar = document.getElementById("salvar");
const btnVoltar = document.getElementById("voltar");

function redirecionaHome() {
  window.location.href = "index.html";
}

btnSalvar.addEventListener("click", () => {
  redirecionaHome();
});

btnVoltar.onclick = function () {
  redirecionaHome();
};

//lista tratamentos

const listaTratamentoSimples = ['pintura', 'chapinha', 'pistola nano']

