var Human1 = [{
	'nama': 'Tono',
	'hari': 'Senin',
	'kehadiran': 'Masuk',
	'alasan': ''},
	{'nama': 'Tono',
	'hari': 'Rabu',
	'kehadiran': 'Masuk',
	'alasan': ''},
	{'nama': 'Tono',
	'hari': 'Jumat',
	'kehadiran': 'Absen',
	'alasan': 'Dinas Luar'}
]
var Cetak = function(Human1) {
	for (n = 0; n < Human1.length; n ++) {
		console.log('Nama: ' + Human1[n].nama);
		console.log('Hari: ' + Human1[n].hari);
		console.log('Kehadiran: ' + Human1[n].kehadiran);

		if (Human1[n].alasan === '') {
			console.log('\n');
			kehadiran ++;
			hadir ++;
		}
		else if (Human1[n].alasan != '') {
			console.log('Alasan: ' + Human1[n].alasan);
			kehadiran ++;
			absen ++;

		}
	}
}
var kehadiran = 0;
var hadir = 0;
var absen = 0;

console.log(Cetak(Human1));
console.log('Total hari kerja minggu ini: ' + kehadiran + ' hari');
console.log('Total masuk: ' + hadir + ' hari');
console.log('Total Tidak Masuk: ' + absen + ' hari');
