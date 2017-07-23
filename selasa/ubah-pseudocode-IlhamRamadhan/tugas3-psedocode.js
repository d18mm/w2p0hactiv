function bagitahun(tahun,bg1,bg2,bg3){
  return tahun %= bg1 ;
  return tahun %= bg2;
  return tahun %= bg3;
}

var tahun = 1992;
var bg1 = 4, bg2=100 ,bg3=400;
var hasilbg1 = bagitahun(tahun, bg1);
var hasilbg2 = bagitahun(tahun, bg2);
var hasilbg3 = bagitahun(tahun, bg3);

if(hasilbg1 ==0){
  console.log('tahun adalah bukan tahun kabisat');
}
else{
  console.log('tahun adalah tahun kabisat');
};

if(hasilbg2 ==0){
  console.log('tahun adalah bukan tahun kabisat');
}
else{
  console.log('tahun adalah tahun kabisat');
};

if(hasilbg3 ==0){
  console.log('tahun adalah tahun kabisat');
}
else{
  console.log('tahun adalah bukan tahun kabisat');
};
