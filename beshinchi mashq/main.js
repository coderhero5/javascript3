let a = prompt("1-sonni kiriting");
let b = prompt("2-sonni kiriting");
let c = prompt("3-sonni kiriting");


if ( a > 0 &&  b > 0 &&  c > 0 ){
  console.log( " 3 ta musbat");
}


else if((a > 0 && b > 0 &&  c < 0) || (a > 0 &&  b < 0 &&  c > 0)|| (a < 0 &&  b > 0 &&  c > 0))  {
  console.log("2 ta musbat, 1 ta manfiy");
}


else if((a > 0 &&  b < 0 &&  c < 0) ||(a < 0 &&  b > 0 &&  c < 0) || (a < 0 &&  b < 0 &&  c > 0)) {
  console.log(" 1 ta musbat, 2 ta manfiy");
}


else if(a < 0 &&  b < 0 &&  c < 0){
  console.log(" 3 ta manfiy");
}
 
 