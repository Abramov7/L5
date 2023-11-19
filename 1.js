let m = Number(prompt('Строки'));
let n = Number(prompt('Столбцы'));

matrix = []

for (let i = 0; i<m; i++) {
    //push - добавляет элемент в конец
    //unshift - добавляет элемент в начало
    matrix.push([])
    for (let j = 0;j<n;j++) {
        matrix[i].push((i+1)*10)
    }
}

console.log(matrix)