let a = prompt("1-sonni kiriting");
let b = prompt("2-sonni kiriting");
let c = prompt("3-sonni kiriting");



if ( a > 0 &&  b > 0 &&  c > 0 ){
  console.log(3);
}


else if((a > 0 && b > 0 &&  c < 0) || (a > 0 &&  b < 0 &&  c > 0)|| (a < 0 &&  b > 0 &&  c > 0))  {
  console.log(2);
}


else if((a > 0 &&  b < 0 &&  c < 0) ||(a < 0 &&  b > 0 &&  c < 0) || (a < 0 &&  b < 0 &&  c > 0)) {
  console.log(1);
}


else if(a < 0 &&  b < 0 &&  c < 0){
  console.log(0);
}
 
 
 
 