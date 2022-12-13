const a = prompt("son kiriting");

let user = a;

if ( user > 0){
  console.log(++user);
}
else if(  user < 0 ){
  console.log( user-2 );
}
else if ( user == 0 ){
  console.log(+10);
}