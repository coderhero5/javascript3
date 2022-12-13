let a = +prompt("Yoshimgizmi kiriting");

if ( a >= 20){
  let b = confirm("Menga turmushga chiqishga rozimisan");
  b === true
  ? console.log ("Toylar muborak")
  : console.log ("Boshqa variant");
}
else {
  if (confirm("Yaxshilab o'ylab ko'r ukam.")){
    let b = confirm( "Menga turmushga chiqishga rozimisan");
    b  === true
    ? console.log ("Toylar muborak")
    : console.log ("Boshqa variant");
  }

}