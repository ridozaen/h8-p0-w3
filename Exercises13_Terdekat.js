function targetTerdekat(arr) {
    var i = 0;
    var selisih = [];
    if (arr.indexOf('x') === -1 ){
        selisih.push(0);
    }
    while (i < arr.length) {
        if (arr[i] !== ' ') {
            var distance = true;
            var j = i + 1;
            // compute selisih
            while (j < arr.length) {
                if (arr[j] !== ' ' && arr[j] !== arr[i]) {
                    selisih.push(j - i);
                    break;
                }
                j++
            }
        }
        i++;
    }
    return Math.min(...selisih);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
