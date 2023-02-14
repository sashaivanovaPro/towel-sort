
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  matrix.forEach(function (item, i) {
    if (i % 2 !== 0){
      item.reverse();
   }
    arr = matrix.flat(Infinity);
  })
  return(arr);
  }

/* один массив из нескольких в порядке возрастания
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}
*/
/* Для неопределенной матрицы
if (paramName === undefined) */
