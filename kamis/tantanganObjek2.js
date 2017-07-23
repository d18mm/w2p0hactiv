var Teman = function(nama,kabar,pekerjaan){
  this.nama=nama;
  this.kabar=kabar;
  this.pekerjaan=pekerjaan;
  this.sapa=function(nama){
    console.log('Halo ' +nama +' ,Apa kabar?')
  };
  this.balasSapa=function(nama,kabar){
    console.log('Halo ' +nama +' ,Kabarku ' +kabar )
  };
  this.tanyaPekerjaan=function(){
    console.log('Apakah Pekerjaanmu saat ini ?')
  };
  this.balasPekerjaan=function(pekerjaan){
    console.log('Pekerjaan saat ini adalah ' + pekerjaan)
  };
  this.berpisah=function(Teman){
    console.log('senang bertemu denganmu ' +nama +' semoga kamu sukses menjadi '+ pekerjaan )
  };
}

var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');

budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);
