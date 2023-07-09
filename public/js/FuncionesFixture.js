/*
IMPRESION POR PANTALLA DE LOS EUQUIPOS CON LAS FECHAS
IMPRESION POR PANTALLA DE LOS EUQUIPOS CON LAS FECHAS
IMPRESION POR PANTALLA DE LOS EUQUIPOS CON LAS FECHAS
IMPRESION POR PANTALLA DE LOS EUQUIPOS CON LAS FECHAS
IMPRESION POR PANTALLA DE LOS EUQUIPOS CON LAS FECHAS
*/
//impresion

// Funcionando full hd 4k

/*

a la funcion imprimir equipos se le pasa como parametro la cantidad de equipos y se le pasa e arreglo
con los strings que contienen el nombre de cada uno del los quipos para ser sorteados


el por defecto del arreglo es el nombre del primer equipo, que es el que nunca se mueve


*/

//array pricipal
var strinequipos = ["AJAX","BARCELONA","REAL MADRID","JUVENTUS"];
//-ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff-

//funcion para ramdomizar el array
function Ramdomizar(){
    var yo=shuffle(strinequipos);

    alert(yo);

    function shuffle(arra1) {
        var ctr = arra1.length, temp, index;

        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
}

//var yo =  strinequipos[Math.floor(Math.random() * strinequipos.length)];
//console.log(strinequipos);
//console.log(yo)
//alert(yo);
//-ffffffffffffffffffffffffffffffffffffffff------------------fffffffffffffffff
var numeuquipos = strinequipos.length;
ImprimirEquipos(numeuquipos,strinequipos);
function ImprimirEquipos (NumeroEquipos,strinequipos){
    let Teams = numeuquipos;
    if(Teams === 4){
        let u = [1,2,3]//de la tabla
        Objeto = [u.length];
        for(let i = 1; i<= u.length;i++){
            //var a1 = a;
            //hago esta condicional para que no me muestre 1 en la
            //ultima posicion, dependiendo el penultimo array
            // o simplemente coloco el largo y le resto uno y al valor le sumo uno
            //ya que el largo siempre va a ser el mismo
            if(i === u.length){
                Objeto[i] ={
                    Equipos : {

                        1:u[0]=u[1],
                        2:u[1]=u[2],
                        3:u[2]=(u[u.length-1]+1),


                    }
                }
            }
            else{
                Objeto[i] ={
                    Equipos : {

                        1:u[0]=u[1],
                        2:u[1]=u[2],
                        3:u[2]=(u[0]-1),


                    }
                }

            }

            //var a2 =
        }

        console.log("4 EQUIPOS :");
        console.log(Objeto);
    }

    /*
    6  EQUIPOS
    */
    //con objetos
    //para 6 equipos no se coloca el 1 por que ya esta asignado en la misma posision cuando
    //imprime

    if(Teams === 6){
        var u = [1,2,3,4,5];
        Objeto = [u.length];
        for(let i = 1; i<= u.length;i++){
            //var a1 = a;
            //hago esta condicional para que no me muestre 1 en la
            //ultima posicion, dependiendo el penultimo array
            // o simplemente coloco el largo y le resto uno y al valor le sumo uno
            //ya que el largo siempre va a ser el mismo
            if(i === u.length){
                Objeto[i] ={
                    Equipos : {

                        1:u[0]=u[1],
                        2:u[1]=u[2],
                        3:u[2]=u[3],
                        4:u[3]=u[4],
                        5:u[4]=(u[u.length-1]+1),

                    }
                }
            }
            else{
                Objeto[i] ={
                    Equipos : {

                        1:u[0]=u[1],
                        2:u[1]=u[2],
                        3:u[2]=u[3],
                        4:u[3]=u[4],
                        5:u[4]=(u[0]-1),

                    }
                }

            }

            //var a2 =
        }
        console.log("6 EQUIPOS :");
        console.log(Objeto);
    }


    /*
     8  EQUIPOS
     */
    //con objetos
    //para 6 equipos no se coloca el 1 por que ya esta asignado en la misma posision cuando
    //imprime
    if(Teams === 8){
        let u = [1,2,3,4,5,6,7];
        Objeto = [u.length];
        for(let i = 1; i<= u.length;i++){
            //var a1 = a;
            //hago esta condicional para que no me muestre 1 en la
            //ultima posicion, dependiendo el penultimo array
            // o simplemente coloco el largo y le resto uno y al valor le sumo uno
            //ya que el largo siempre va a ser el mismo
            if(i === u.length){
                Objeto[i] ={
                    Equipos : {

                        1:u[0]=u[1],
                        2:u[1]=u[2],
                        3:u[2]=u[3],
                        4:u[3]=u[4],
                        5:u[4]=u[5],
                        6:u[5]=u[6],
                        7:u[6]=(u[u.length-1]+1),

                    }
                }
            }
            else{
                Objeto[i] ={
                    Equipos : {

                        1:u[0]=u[1],
                        2:u[1]=u[2],
                        3:u[2]=u[3],
                        4:u[3]=u[4],
                        5:u[4]=u[5],
                        6:u[5]=u[6],
                        7:u[6]=(u[0]-1),

                    }
                }

            }

            //var a2 =
        }
        console.log("8 EQUIPOS :");
        console.log(Objeto);
    }

    /*
   8  EQUIPOS
   */
    //con objetos
    //para 6 equipos no se coloca el 1 por que ya esta asignado en la misma posision cuando
    //imprime

    if(Teams === 10){
        let u = [1,2,3,4,5,6,7,8,9];
        Objeto = [u.length];
        for(let i = 1; i<= u.length;i++){
            //var a1 = a;
            //hago esta condicional para que no me muestre 1 en la
            //ultima posicion, dependiendo el penultimo array
            // o simplemente coloco el largo y le resto uno y al valor le sumo uno
            //ya que el largo siempre va a ser el mismo
            if(i === u.length){
                Objeto[i] ={
                    Equipos : {

                        1:u[0]=u[1],
                        2:u[1]=u[2],
                        3:u[2]=u[3],
                        4:u[3]=u[4],
                        5:u[4]=u[5],
                        6:u[5]=u[6],
                        7:u[6]=u[7],
                        8:u[7]=u[8],
                        9:u[8]=(u[u.length-1]+1),

                    }
                }
            }
            else{
                Objeto[i] ={
                    Equipos : {

                        1:u[0]=u[1],
                        2:u[1]=u[2],
                        3:u[2]=u[3],
                        4:u[3]=u[4],
                        5:u[4]=u[5],
                        6:u[5]=u[6],
                        7:u[6]=u[7],
                        8:u[7]=u[8],
                        9:u[8]=(u[0]-1),

                    }
                }

            }

            //var a2 =
        }

        console.log("10 EQUIPOS :");
        console.log(Objeto);
    }
    let strinequi = [];

    strinequi = strinequipos;

    let NumEquipos = NumeroEquipos;

    let TotalFechas = NumEquipos-1;

    let NumPartidosFecha = NumEquipos/2;

    let TotalDePartidos = NumPartidosFecha*TotalFechas;

    //ultimo porque el usuario ingresa por ejemplo 6 se resta uno porque el uno
    //siempre se va a repetir en los ciclos
    //se le resta otro uno porque el arrray empieza desde cero
    //asi puedo calcular cual va a ser el indice del ultimo

    let ultimo = NumEquipos;

    alert(ultimo)
    //busco los caracteres y los remplazo con esta variable
    var buscarcaracter = "";
    //solo es entregarle el array con los valorea a los ciclos for
    //a = ["b","c","d","e","f","h","i","j","k","l","m","n","p","u","o"];



    alert(Objeto.length);
    //CONTADOR PARA LOS OBJETOS
    let p = 1;
    //a = Object.values(Objeto[1].Equipos);
    //for para el total de fechas e imprima fecha una por una

    document.write("<br>");
    for(let z =0; z<TotalFechas;z++){
        //for para calcular los partidos a partir de un array rotado
        //inicializo ultimo de nuevo para que no me genere problemas al
        //cargar los ultimos equipos
        //por que se repiten
        ultimo = NumEquipos-2;
        document.write("<hr>");
        document.write("<h5>RONDA : "+(z+1)+"</h5>"+"         Fecha:_____________");
        document.write("<hr>");


        parseInt()
        for(let i = 0; i<NumPartidosFecha;){
            var a = [];
            a = Object.values(Objeto[p].Equipos);
            alert(a);


            if(i === 0){

                document.write(strinequi[0]+"                        VS  "+strinequi[parseInt(a[i])]+"                ||||                   "+"Marcador: ________  vs  ________"+"Hora:___________"+"<br>");

            }
            else if(i === 1){

                document.write((strinequi[parseInt(a[ultimo])])+"    VS  "+(strinequi[parseInt(a[i])])+"             ||||                  "+" Marcador:________  vs  ________"+"Hora:___________"+"<br>");

            }
            else{
                //c += (ultimo-1);

                document.write(((strinequi[parseInt(a[ultimo-=1])]))+" VS  "+(strinequi[parseInt(a[i])])+"            |||||                   "+"Marcador:________  vs  ________"+"Hora:___________"+"<br>");

            }
            i++;


        }
        document.write("<br>");

        p++;
    }
}