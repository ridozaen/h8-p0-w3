function mengelompokkanAngka(arr) {
    var i = 0;
    arrKelompok = [];
    arrGenap = [];
    arrGanjil = [];
    arrLipat3 = [];
    while (i < arr.length) {
        if (arr[i] % 3 === 0) {
            arrLipat3.push(arr[i]);
        }
        else if (arr[i] % 2) {
            arrGanjil.push(arr[i]);
        }
        else {
            arrGenap.push(arr[i])
        }
        i++
    }
    arrKelompok.push(arrGenap);
    arrKelompok.push(arrGanjil);
    arrKelompok.push(arrLipat3);
    return arrKelompok;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
