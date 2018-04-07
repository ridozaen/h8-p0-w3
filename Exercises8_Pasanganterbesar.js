function pasanganTerbesar(num) {
    var counter = 0;
    var numString = num.toString();
    var arrNum = [];
    while (counter < numString.length){
        arrNum.push(parseInt(numString.substr(counter,2)));
        counter = counter + 1;
    }
    return Math.max(...arrNum);
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  