function tocaSom(IdElementoAudio) {

document.querySelector(IdElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];

    const idAudio = `#som_${instrumento}`;

   listaDeTeclas[contador].onclick = function () {
    tocaSom (idAudio);
   }
   contador = contador + 1;

   console.log(contador);
}