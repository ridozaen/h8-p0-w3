function palindrome(kata){
    var balikKata = '';
    var i = kata.length-1;
    while(i >= 0){
        balikKata = balikKata + kata[i];
        i=i-1;
    }
    return kata === balikKata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false