function groupAnimals(animals) {
    // you can only write your code here!
    var i = 1;
    var arrTemp = [];
    var arrNew = [];
    animals.sort();
    arrTemp.push(animals[0]);
    while (i < animals.length) {
        if (animals[i - 1].charAt(0) === animals[i].charAt(0)) {
            arrTemp.push(animals[i]);
        }
        else {
            arrNew.push(arrTemp);
            arrTemp = [];
            arrTemp.push(animals[i]);
        }
        i++
    }
    arrNew.push(arrTemp);
    return arrNew;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak', 'badak', 'singa','sapi','simpanse']));