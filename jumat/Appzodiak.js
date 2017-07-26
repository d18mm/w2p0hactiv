var bulan = ['januari','februari','maret','april','mei','juni','juli','agustus',
'september','oktober','november','desember'];

var zodik= ['Capricorn','Aquarius','Pisces','Cancer','Leo','Virgo','Libra',
	'Scorpio', 'Aries','Taurus','Gemini','segitarius'];
	var input = prompt("Masukan Bulan Kelahiran anda");
	var j = input;
	switch (j) {
		case bulan[0]:
		case bulan[1]:
		case bulan[2]:
		case bulan[3]:
		case bulan[4]:
		case bulan[5]:
		case bulan[6]:
		case bulan[7]:
		case bulan[8]:
		case bulan[9]:
		case bulan[10]:
		case bulan[11]:
			alert("Ok selanjutnya isi tanggal Kelahiran anda");
		var tgl =  prompt("Masukan Tanggal berupa angka");
		break;
		default:
			alert("isi bulan salah");
			alert("isi bulan yang disediakan, januari hingga desember");
	};
			if (tgl >31) {
			alert("isi tanggal salah, masukan angka Kelahiran anda");
			alert("refresh halaman untuk menggulang ");
		}
		else if (input == bulan[11] && tgl >=22 || input == bulan[0] && tgl<=20 ) {
		alert("zodiak anda " +zodik[0]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[0] && tgl >=21 || input == bulan[1] && tgl<=19) {
		alert("zodiak anda " +zodik[1]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[1] && tgl >=20 || input == bulan[2] && tgl<=20) {
		alert("zodiak anda " +zodik[2]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[5] && tgl>=22 || input == bulan[6] && tgl<=22) {
		alert("zodiak anda " +zodik[3]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[6] && tgl>=23 || input == bulan[7] && tgl<=22) {
		alert("zodiak anda " +zodik[4]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[7] && tgl>=22 || input == bulan[8] && tgl<=22) {
		alert("zodiak anda " +zodik[5]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[8] && tgl>=24 || input == bulan[9] && tgl<=23) {
		alert("zodiak anda " +zodik[6]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[7] && tgl>=24 || input == bulan[8] && tgl<=22) {
		alert("zodiak anda " +zodik[7]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[10] && tgl>=23 || input == bulan[11] && tgl<=21) {
		alert("zodiak anda " +zodik[11]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[2] && tgl>=21 || input == bulan[3] && tgl<=20) {
		alert("zodiak anda " +zodik[8]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[3] && tgl>=21 || input == bulan[4] && tgl<=21) {
		alert("zodiak anda " +zodik[9]);
		alert("refresh halaman untuk menggulang ");
	}
	else if (input == bulan[4] && tgl>=22 || input == bulan[5] && tgl<=21) {
		alert("zodiak anda " +zodik[10]);
		alert("refresh halaman untuk menggulang ");
	}
	else{
		alert(" input salah, refresh halaman untuk menggulang ");
	}
