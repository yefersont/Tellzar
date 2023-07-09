//funcion agregar equipo----------------------------------------------
//imprime los input necesarios dependiendo del valor del select   
function AgregarEquipos() {
	var valor = document.getElementById('NumeroEquipos').value;
	var n = parseInt(valor);

	var caja = document.querySelector('#equipos');
	caja.innerHTML = '';
	for (var i = 1; i <= n; i++) {
		caja.innerHTML +=
			`<label for="${i}">Equipo${i}: </label>
		<input type="text" class="form-control" name="e${i}" id="${i}" >`;
		//alert(document.getElementById(i).value);
		
	}
	caja.innerHTML +=
	 `<div class="row">
	 	<div class="col-12 form-group p-4">
        	<button type="submit" class="btn btn-primary" onclick="Equiposjson()">Guardar</button> 
        </div>
      </div> `
	
}


//funcion validar inputs----------------------------------------------------------
function ValidarInputs() {

	let n_posiciones = document.getElementById('NumeroEquipos').value;
	//let valor_input = document.getElementById(i).value;
	let n = parseInt(n_posiciones);
	let contador = 0;

	for (var input of document.getElementsByTagName("input")) {
		if (input.value == ""){
			contador += 1;
		}
	};
	//SE LE RESTA 1 PORQUE YA EXISTE UN INPUT MAS EN LA BARRA DE BUSQUEDA
	contador-=1
    alert(contador)
	if (contador <=n && contador >0){

		//alert('Hay un campo vacio');
		contador = 0;
		return  false;
	}
	else{
		alert("llenos jaja");
		return true;
	}

};

//end funcion;

//Funciones para las estadisticas del torneo
//Datos a calcular
//nombre del equipo
//partidos jugados
//partidos ganados
//partidos empatados
//pardidos perdidos
//goles a favor
//goles en contra
//partidos jugados
//puntos


function Equiposjson() {
	if(ValidarInputs() == true){
		//nombre del equipo
		var valor = document.getElementById('NumeroEquipos').value;
		var n = parseInt(valor);
		var ArrayEquipos = new Array();
		//var jean = 4;
		//ArrayEquipos[0] = document.getElementById(`${jean}`).value;
		//document.write(ArrayEquipos[0]);

		for (var i = 1; i <= n; i++) {
			ArrayEquipos[i-1] = document.getElementById(`${i}`).value;
		}
		/*
		for (var z = 0; z <AgregarEquipos.length; z++) {
			document.log();

		}
		*/
		ArrayEquipos.forEach(function(element) {
			console.log(element);
		});
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200){
				console.log(this.responseText);
			}
		}
		let parametros = JSON.stringify(ArrayEquipos);
		xhr.open('POST', 'http://127.0.0.1/bienestaraprendiz/Controlador/ensayar', true);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send('datos=' + parametros);
	}
	else{
		alert("Campos vacios")
	}
}
