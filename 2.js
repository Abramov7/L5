let matrix = [[0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]]

let max_stroke = matrix[0]
let min_stroke = matrix[0]
for (let i=0; i<matrix.length; i++) {
    //(...matrix[i]) - передаёт как аргументы
    if ( Math.max(...matrix[i]) > Math.max(...max_stroke) ) {
        max_stroke = matrix[i]
    }

    if ( Math.min(...matrix[i]) < Math.min(...min_stroke) ) {
        min_stroke = matrix[i]
    }
}

//indexOf - возвращает индекс элемента
matrix[matrix.indexOf(max_stroke)] = min_stroke
matrix[matrix.indexOf(min_stroke)] = max_stroke
console.log(matrix)