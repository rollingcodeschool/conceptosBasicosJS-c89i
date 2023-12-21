/*while(condicion logica){

    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion se deje de cumplir
}
*/
// let renglon = 1000;

// while(renglon <= 100){
//     //  document.write('<p>Renglon numero '+ renglon+'</p>');
//      document.write(`<p>Renglón número ${renglon}</p>`);
//     renglon++; //renglon = renglon + 1;
// }

//do-while
/* 
do{
  todas las lineas de codigo que quiero repetir varias veces
  agregar un codigo para que la condicion se deje de cumplir
}while(condicion logica)
*/
let renglon = 1000;
do{
    document.write(`<p>Renglón número ${renglon}</p>`);
    renglon++; 
}while(renglon <=50)

//for