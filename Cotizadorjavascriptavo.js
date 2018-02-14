
//ciclos variables iniciales
var validesfecha = 0;
var validesfecha2 = 0;
var hijosconteo = 0;
var ciclocon = 0; 

// creamos variables
var nombreCompleto = new String
var diaNacimiento  = new String
var mesNacimiento  = new String
var anioNacimiento = new String
var fechaNacAsegur = new String
var fechacompleta = new String

var mesNacimientooperatorio = new String
var diaNacimientooperatorio 
var prueba





/* pedimos datos al usuario
nombreCompleto = prompt("Nombre completo:", "");
fechacompletaNaci = prompt("Fecha Nacimiento formato: mm/dd/aaaa");
fechavalidada = validarfecha(validesfecha, fechacompletaNaci);                          // devuelve la fecha validad
annosvalidada = annos(fechavalidada); 													//devuelve los años cumplidos
conyugeaux = prompt("¿Tiene Esposa o Esposo?: SI/NO", "");
if (validacon(conyugeaux) == "si"){
	fechaconyuge = prompt("Fecha Nacimiento pareja: mm/dd/aaaa");
	fechavalidadaconyuge = validarfecha(validesfecha2, fechaconyuge); 
}
hijosaux = prompt("¿Tiene Hijos?: SI/NO", "");
respuestahijoss = validahijo(hijosaux);
hijosreconteo = hijos(respuestahijoss);
*/




const precioBase = 250;
comision = precioBase * 0.30;







// En la siguiente variable usted debe calcular los cargos correspondientes.

// Puede crear la cantidad de variables necesarias para calcular cada uno

// de los recargos que sean necesarios

recargos = 0;





totalPagar = precioBase + comision + recargos;

document.write(totalPagar);

	
	*/
	
//Funciones

//funcion que valida que la fecha ingresada sea la correcta.
// ******************* validez *****************************************************************************
function validarfecha(validesfecha, fechacompletaNaci) {
	var verificadorNacl = fechacompletaNaci.length; 
while (validesfecha == 0){
if (verificadorNacl == 10){
	var separador = fechacompletaNaci.slice(2, 3);
		if (separador == "/"){
		var separador  = fechacompletaNaci.slice(5, 6);
			if (separador == "/"){
				var mes = parseInt(fechacompletaNaci.slice(0, 2));
				var dia = parseInt(fechacompletaNaci.slice(3, 5));
				var anno = parseInt(fechacompletaNaci.slice(6, 10));
				if((mes > 0) && (mes < 13)){
					if((dia > 0) && (dia < 32)){
						if((anno > 1900) && (anno < 2019)){
							validesfecha = 1;
						}else {fechacompletaNaci = prompt("Ingrese Correctamente \n Fecha Nacimiento formato: mm/dd/aaaa");
								verificadorNacl = fechacompletaNaci.length; 
								validesfecha = 0; }
					}else {fechacompletaNaci = prompt("Ingrese Correctamente \n Fecha Nacimiento formato: mm/dd/aaaa");
								verificadorNacl = fechacompletaNaci.length; 
								validesfecha = 0; }
				}else {fechacompletaNaci = prompt("Ingrese Correctamente \n Fecha Nacimiento formato: mm/dd/aaaa");
								verificadorNacl = fechacompletaNaci.length; 
								validesfecha = 0; }
			}else {fechacompletaNaci = prompt("Ingrese Correctamente formato \n Fecha Nacimiento formato: mm/dd/aaaa");
								verificadorNacl = fechacompletaNaci.length; 
								validesfecha = 0; }
		}else {fechacompletaNaci = prompt("Ingrese Correctamente formato \n Fecha Nacimiento formato: mm/dd/aaaa");
								verificadorNacl = fechacompletaNaci.length; 
								validesfecha = 0; }
	}else {fechacompletaNaci = prompt("No es una fecha valida \n Fecha Nacimiento formato: mm/dd/aaaa");
								verificadorNacl = fechacompletaNaci.length; 
								validesfecha = 0; }
}
    return fechacompletaNaci;              // retorna la fecha ya validad de nacimiento

}
// ******************* validez *****************************************************************************

//funcion que valida las edades.
// ******************* años *****************************************************************************
function annos(fecha){
// inicializamos variables mes y dia y fecha actual
	var fechaActual = new Date()
	var fechadia, fechames
	fechames = fechaActual.getMonth()
	fechames = fechames + 1;
	fechadia = fechaActual.getDate()

	var annomes = parseInt(fecha.slice(0, 2));
	var annodia = parseInt(fecha.slice(3, 5));
	var annoaux = parseInt(fecha.slice(6, 10));
	if(annomes <= fechames){
		if(annodia <= fechadia){
			var annoactual = 2018;
			var annoshbd = annoactual - annoaux;
		}else{
			var annoactual = 2018;
			var annoshbd = annoactual - annoaux -1;
			}
							}else{
						var annoactual = 2018;
						var annoshbd = annoactual - annoaux - 1 ;
					}
return annoshbd;
}
// ******************* Años *****************************************************************************

//funcion que valida si ingreso correcto conyuge
// ******************* conyuge *****************************************************************************
function validacon(aux){
	var conyugerespuesta = aux.toLowerCase();
	var conteoconyuge = aux.length; 
	var respuestahijo
while (ciclocon == 0){
		if(conteoconyuge == 2){
			if ((conyugerespuesta == "si") || (conyugerespuesta == "no")){
				respuestacon = conyugerespuesta;
				ciclocon = 1;
			}else {conyugerespuesta = prompt("Favor ingresar respuesta correctamente \n ¿Tiene Esposa o Esposo?: SI/NO", "");
					conyugerespuesta = conyugerespuesta.toLowerCase();
					conteoconyuge = conyugerespuesta.length; 
					ciclocon = 0; 
					}
		}else {conyugerespuesta = prompt("Favor ingresar respuesta correctamente \n ¿Tiene Esposa o Esposo?: SI/NO", "");
					conyugerespuesta = conyugerespuesta.toLowerCase();
					conteoconyuge = conyugerespuesta.length; 
					ciclocon = 0;
				}
}
return respuestacon;
}
// ******************* Conyuge *****************************************************************************

//funcion que valida los hijos
// ******************* hijos *****************************************************************************
function validahijo(aux){
	var hijorespuesta = aux.toLowerCase();
	var conteohijo = aux.length; 
	var respuestacon
while (ciclocon == 0){
		if(conteohijo == 2){
			if ((hijorespuesta == "si") || (hijorespuesta == "no")){
				respuestacon = hijorespuesta;
				ciclocon = 1;
			}else {hijorespuesta = prompt("Favor ingresar respuesta correctamente \n ¿Tiene Hijos?: SI/NO", "");
					hijorespuesta = hijorespuesta.toLowerCase();
					conteohijo = hijorespuesta.length; 
					ciclocon = 0; 
					}
		}else {hijorespuesta = prompt("Favor ingresar respuesta correctamente \n ¿Tiene Hijos?: SI/NO", "");
					hijorespuesta = hijorespuesta.toLowerCase();
					conteohijo = hijorespuesta.length; 
					ciclocon = 0;
				}
}
return respuestacon;
}
// ******************* hijos *****************************************************************************

//funcion cuenta hijos y valida cantidad
// ******************* hijos conteo **********************************************************************
function hijos(aux){
var cantidadhijos;
if (aux == "si"){
	chiquirrines = prompt("Favor ingresar cantidad de hijos (numeros)", "");
	if (chiquirrines > 0){
		cantidadhijos = parseInt(chiquirrines);
	}
}else{cantidadhijos = 0;}
return cantidadhijos;
}
// ******************* hijos conteo **********************************************************************
