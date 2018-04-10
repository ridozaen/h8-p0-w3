/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [0, 20, 40, 55, 70] = 5 data
  output: tidak ada yang lulus

- input: [70, 85, 65, 90]
  output: 2 orang lulus

- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus

- input: [90, 100, 76, 85]
  output: Semua lulus

- input: []
  output: Data kosong



RULES:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/

// pseudo code


/*FUNCTION graduatesCount with param "input" with ARRAY value
        STORE "counter" with 0
        STORE "lulus" with 0
        IF "input" EMPTY THEN
            return "Data Kosong"
        END IF
        WHILE "counter" < length of input
              IF "Input" Index of "counter" >= 75
                 ADD "lulus" by 1
              ENDIF
              ADD "counter" by 1
        ENDWHILE
        IF "lulus" equal to 0 THEN
              return "Tidak ada yang lulus"
          ELSE IF "lulus" equal to "input" length THEN
              return "Semua lulus"
          ELSE 
              return total("lulus") + "orang lulus";
END FUNCTION */



function graduatesCount(scores) {
  var counter = 0;
  var lulus = 0;
  if (scores.length === 0) {
    return "Data Kosong";
  }
  while (counter < scores.length) {
    if (scores[counter] >= 75) {
      lulus = lulus + 1;
    }
    counter++;
  }
  if (lulus === 0) {
    return "Tidak ada yang lulus";
  }
  else if (lulus === scores.length){
    return "Semua orang lulus";
  } else {
    return lulus + " orang lulus";
  }
}


// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 80, 74, 60, 87])); // 4 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
