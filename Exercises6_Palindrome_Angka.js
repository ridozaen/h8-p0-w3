function angkaPalindrome(num) {
    num = num + 1;
    if (num > 0 && num < 10) {
        return num;
    }
    while (!palindrome(num.toString())) {
        num = num + 1;
    }
    return num;

    function palindrome(kata) {
        var balikKata = '';
        var i = kata.length - 1;
        while (i >= 0) {
            balikKata = balikKata + kata[i];
            i = i - 1;
        }
        return kata === balikKata;
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(1001));