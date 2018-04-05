var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input[1] = input[1] + " Elsharawy";
    input[2] = "Provinsi " + input[2];
    input.splice(4, 1, "Pria", "SMA International Metro");
    console.log(input);
    var tanggal = input[3].split("/");
    console.log(convertBulan(tanggal[1]));
    var joinTgl = tanggal.join("-");
    console.log(tanggal.sort(function (a, b) { return b - a }));
    console.log(joinTgl);
    console.log(input.slice(1, 2)[0].substr(0, 15));
}

function convertBulan(tgl) {
    switch (tgl) {
        case "01":
            tgl = "Januari";
            break;
        case "02":
            tgl = "Februari";
            break;
        case "03":
            tgl = "Maret";
            break;
        case "04":
            tgl = "April";
            break;
        case "05":
            tgl = "Mei";
            break;
        case "06":
            tgl = "Juni";
            break;
        case "07":
            tgl = "Juli";
            break;
        case "08":
            tgl = "Agustus";
            break;
        case "09":
            tgl = "September";
            break;
        case "10":
            tgl = "Oktober";
            break;
        case "11":
            tgl = "November";
            break;
        case "12":
            tgl = "Desember";
            break;
    }

    return tgl;
}

dataHandling2(arr);