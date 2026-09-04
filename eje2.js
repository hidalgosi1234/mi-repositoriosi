let notas = [
[2, 3, 6, 5], [6, 7, 3, 5], 
[4, 7, 8, 1], [3, 4, 9, 2]

]; //eso es dimencionar matricez ok
// I, FILA, j, columna
let notamax = notas[0][0], maxF = 0, maxC = 0 ;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; i++){
       if (notas[i][j] > notamax){
        notamax = notas[i][j];
        maxF = i; maxC = j; 



       }



    }
}

console.log( `Mayor Nota: {notamax} en Fila [{maxF}], Columna [{maxC}]`);