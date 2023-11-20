
/* DESAFIO:
 Contar todas a letras e quantidades repetidas.
*/

const letras = ['a', 'a', 'b', 'b', 'a', 'b', 'a', 'c', 'p', 'p'];

let itemCount = {};
letras.forEach((item) => {
    if (itemCount[item]) {
        itemCount[item] += 1;
        return;
    }
    itemCount[item] = item.length;
});

console.log('------------------------------------------');
console.log('Lista de letras contadas: \n', itemCount);
console.log('------------------------------------------');



