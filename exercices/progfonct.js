/* Script d'algorithme intermédiaire: deux tableaux de différences
Comparez deux tableaux et retournez un nouveau tableau avec tous les éléments trouvés uniquement dans l'un des deux tableaux donnés, mais pas les deux. En d'autres termes, renvoie la différence symétrique des deux tableaux.

Remarque
Vous pouvez renvoyer le tableau avec ses éléments dans n'importe quel ordre. */

function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.sort()
    arr2.sort()
    if(arr1.length < arr2.length){
for (let i = 0; i<arr1.length; i++){
    if(arr1[i] != arr2[i]){
        newArr.push(arr2[i])
    }}
}else{
    for (let i = 0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]){
            newArr.push(arr1[i])
        }}
}
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
  