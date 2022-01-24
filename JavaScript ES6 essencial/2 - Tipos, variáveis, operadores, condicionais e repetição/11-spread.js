// Spread ...
var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés'];
console.log(musica);

console.log();

function fn(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
var args = [0, 1, 2];
fn(...args);
