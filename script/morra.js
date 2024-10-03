
//LEGENDA COSTANTI

const button = document.querySelector('button');
const scelta = document.querySelector('ul');
const titolo = document.querySelector('h1');
const you = document.getElementById('you');
const puntiP = document.getElementById('punteggioYou');
const puntiC = document.getElementById('punteggioCpu');
const risultato = document.getElementById('risultato');
var mano = document.querySelectorAll('li');

var puntiPlayer = parseInt(puntiP.innerHTML);
var puntiCpu = parseInt(puntiC.innerHTML);


button.onclick = function () {
    button.style.display = 'none';
    scelta.style.display = 'block';
    you.style.backgroundImage = 'none';
    document.getElementById('cpu').style.backgroundImage = 'none';
    risultato.style.display = 'none';
    titolo.innerHTML = 'Totalizza 3 punti per vincere';
}



mano[0].onclick = function () {
    scelta.style.display = 'none';
    you.style.backgroundImage = 'url(immagini/foglia.png)';

    //  let mano = document.querySelectorAll('li');
    let manoCpu = parseInt(Math.random() * mano.length);
    if (manoCpu == 0) {
        document.getElementById('cpu').style.backgroundImage = 'url(immagini/foglia.png)';
        patta();
    }
    else if (manoCpu == 1) {
        document.getElementById('cpu').style.backgroundImage = 'url(immagini/forbice.png)';
        persa();
        controllo();
    }
    else {
        document.getElementById('cpu').style.backgroundImage = 'url(immagini/sasso.png)';
        vinta();
        controllo();
    }
}

mano[1].onclick = function () {
    scelta.style.display = 'none';
    you.style.backgroundImage = 'url(immagini/forbice.png)';

    // let mano = document.querySelectorAll('li');
    let manoCpu = parseInt(Math.random() * mano.length);

    if (manoCpu == 0) {
        document.getElementById('cpu').style.backgroundImage = 'url(immagini/foglia.png)';
        vinta();
        controllo();
    }
    else if (manoCpu == 1) {
        document.getElementById('cpu').style.backgroundImage = 'url(immagini/forbice.png)';
        patta();
    }
    else {
        document.getElementById('cpu').style.backgroundImage = 'url(immagini/sasso.png)';
        persa();
        controllo();
    }
}

mano[2].onclick = function () {
    scelta.style.display = 'none';
    you.style.backgroundImage = 'url(immagini/sasso.png)';

    // let mano = document.querySelectorAll('li');
    let manoCpu = parseInt(Math.random() * mano.length);

    if (manoCpu == 0) {
        document.getElementById('cpu').style.backgroundImage = 'url(immagini/foglia.png)';
        persa();
        controllo();
    }
    else if (manoCpu == 1) {

        document.getElementById('cpu').style.backgroundImage = 'url(immagini/forbice.png)';
        vinta();
        controllo();
    }
    else {
        document.getElementById('cpu').style.backgroundImage = 'url(immagini/sasso.png)';
        patta();
    }
}

document.getElementById('reload').onclick = function () {
    location.reload();
}

//LEGENDA FUNCTION

function controllo() {
    const puntiP = document.getElementById('punteggioYou');
    const puntiC = document.getElementById('punteggioCpu');
    let puntiPlayer = parseInt(puntiP.innerHTML);
    let puntiCpu = parseInt(puntiC.innerHTML);
    const risultato = document.getElementById('risultato');

    if (puntiPlayer == 3) {
        risultato.innerHTML = "<span class='vinta'>Hai vinto la partita! :)</span>";
        fineGioco();
    }
    else if (puntiCpu == 3) {
        risultato.innerHTML = "<span class='persa'>Hai perso la partita! :(</span>";
        fineGioco();
    }
}

function vinta() {
   let puntiPlayer = parseInt(puntiP.innerHTML);
    let puntiCpu = parseInt(puntiC.innerHTML);
    button.style.display = 'inline-block';
    risultato.style.display = 'inline-block';
    risultato.innerHTML = "<span class='vinta'>Partita vinta!</span>";
    puntiP.innerHTML = puntiPlayer + 1;

}

function patta() {
    button.style.display = 'inline-block';
    risultato.style.display = 'inline-block';
    risultato.innerHTML = "<span class='patta'>Partita patta!</span>";
}

function persa() {
    let puntiPlayer = parseInt(puntiP.innerHTML);
    let puntiCpu = parseInt(puntiC.innerHTML);
    button.style.display = 'inline-block';
    risultato.style.display = 'inline-block';
    risultato.innerHTML = "<span class='persa'>Partita persa!</span>";
    puntiC.innerHTML = puntiCpu + 1;
}

function fineGioco() {
    titolo.innerHTML = 'Gioca di nuovo!';
    document.getElementById('reload').style.display = 'block';
    button.style.display = 'none';
}