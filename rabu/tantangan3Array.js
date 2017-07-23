function dataHandling2(inp) {
    var inp2 =inp.splice(4, 1, "Pria", "SMA Internasional Metro");


    var tgl = inp[3].split("/").map(Number)
    var ubh =tgl[1]
    var bulan =["","Januari", "Februari", "Maret", "April", "Mei"];

    console.log(inp);
    console.log(bulan[ubh]);
    console.log(inp[3].split("/").map(Number).sort(function(thn, thnb) {
      return thn < thnb
    }));
    console.log(inp[3].split("/").join("-"));
    console.log(inp[1].slice(0,14));
}
var input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];

console.log(dataHandling2(input));
