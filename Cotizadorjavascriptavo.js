// ********************************************************************************************************
// ******                   VARIABLES                                                                 *****
// ********************************************************************************************************

// inicializamos variables de ciclo
var conVali = 0;
var ciclocon = 0; 
var ciclohij = 0; 

// inicializamos variables Asegurado 
var AseName = new String
var AseHBD = new String
var EdadAse = new String

// inicializamos variables Conyuge
var ConNAme = new String
var ConHBD = new String
var EdadCon = new String

//inicializamos variables Hijos
var ResHijos = new String
var Hijos = new String
// inicializamos variables auxiliares
var ResConyuge = new String
var ResHijos = new String



// constantes
const precioBase = 250;

// ********************************************************************************************************
// ******                   INGRESO DE DATOS                                                          *****
// ********************************************************************************************************

// pedimos datos del asegurado
AseName = prompt("Nombre completo:", "");
AseHBD = prompt("Fecha Nacimiento formato: mm/dd/aaaa");

// validamos que la fecha ingresada Sea correcta con la funcion ValidarFecha(contador,fechaingresada)
AseHBD = ValidarFecha(conVali, AseHBD);

// valida la fecha vemos cuantos años tiene el Asegurado
EdadAse = Edad(AseHBD); 		

//pedimos datos del asegurado si tiene esposa o esposo
ResConyuge = prompt("¿Tiene Esposa o Esposo?: SI/NO", "");

//validamos respuesta de asegurado de esposa o esposo
if (validacon(ResConyuge) == "si"){
	ConName = prompt("Nombre Conyuge:", "");
	ConHBD = prompt("Fecha Nacimiento pareja: mm/dd/aaaa");
	ConHBD = ValidarFecha(conVali, ConHBD); 
	EdadCon = Edad(ConHBD); 	
	recargoscc = parseInt(RecCon(precioBase,EdadCon));
}


//preguntamos si tiene Hijos
ResHijos = prompt("¿Tiene Hijos?: SI/NO", "");
CanHijos = validaHijo(ResHijos);
Hijos = vaHijos(CanHijos);

// ********************************************************************************************************
// ******                   OPERACIONES                                                               *****
// ********************************************************************************************************

comision = precioBase * 0.30;
recargosaa = parseInt(RecASeg(precioBase,EdadAse));
recargoshh = Hijos * (precioBase*0.01);
recargos = recargosaa + recargoscc + recargoshh;
totalPagar = precioBase + comision + recargos;
alert(totalPagar);

// ********************************************************************************************************
// ******                   FUNCIONES                                                                 *****
// ********************************************************************************************************


//funcion que valida que la fecha ingresada sea la correcta.
// ******************* validez *****************************************************************************
function ValidarFecha(conVali, fechaHBD) {
	var validoHBD = fechaHBD.length; 
while (conVali == 0){
if (validoHBD == 10){
	var separador = fechaHBD.slice(2, 3);
		if (separador == "/"){
		var separador  = fechaHBD.slice(5, 6);
			if (separador == "/"){
				var mes = parseInt(fechaHBD.slice(0, 2));
				var dia = parseInt(fechaHBD.slice(3, 5));
				var anno = parseInt(fechaHBD.slice(6, 10));
				if((mes > 0) && (mes < 13)){
					if((dia > 0) && (dia < 32)){
						if((anno > 1800) && (anno < 2019)){
							conVali = 1;
						}else {fechaHBD = prompt("Ingrese Correctamente \n Fecha Nacimiento formato: mm/dd/aaaa");
								validoHBD = fechaHBD.length; 
								conVali = 0; }
					}else {fechaHBD = prompt("Ingrese Correctamente \n Fecha Nacimiento formato: mm/dd/aaaa");
								validoHBD = fechaHBD.length; 
								conVali = 0; }
				}else {fechaHBD = prompt("Ingrese Correctamente \n Fecha Nacimiento formato: mm/dd/aaaa");
								validoHBD = fechaHBD.length; 
								conVali = 0; }
			}else {fechaHBD = prompt("Ingrese Correctamente formato \n Fecha Nacimiento formato: mm/dd/aaaa");
								validoHBD = fechaHBD.length; 
								conVali = 0; }
		}else {fechaHBD = prompt("Ingrese Correctamente formato \n Fecha Nacimiento formato: mm/dd/aaaa");
								validoHBD = fechaHBD.length; 
								conVali = 0; }
	}else {fechaHBD = prompt("No es una fecha valida \n Fecha Nacimiento formato: mm/dd/aaaa");
								validoHBD = fechaHBD.length; 
								conVali = 0; }
}
    return fechaHBD;              // retorna la fecha ya validad de nacimiento

}
// ******************* validez *****************************************************************************

//funcion que valida las edades.
// ******************* años *****************************************************************************
function Edad(fecha){
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
				if(annomes <= fechames){
				var annoactual = 2018;
				var annoshbd = annoactual - annoaux;
				}else{
				var annoactual = 2018;
				var annoshbd = annoactual - annoaux;
				}
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

// ******************* hijos *****************************************************************************
function validaHijo(aux){
	var hijorespuesta = aux.toLowerCase();
	var conteohijo = aux.length; 
while (ciclohij == 0){
		if(conteohijo == 2){
			if ((hijorespuesta == "si") || (hijorespuesta == "no")){
				respuestahijo = hijorespuesta;
				ciclohij = 1;
			}else {hijorespuesta = prompt("Favor ingresar respuesta correctamente \n ¿Tiene Hijos?: SI/NO", "");
					hijorespuesta = hijorespuesta.toLowerCase();
					conteohijo = hijorespuesta.length; 
					ciclohij = 0; 
					}
		}else {hijorespuesta = prompt("Favor ingresar respuesta correctamente \n ¿Tiene Hijos?: SI/NO", "");
					hijorespuesta = hijorespuesta.toLowerCase();
					conteohijo = hijorespuesta.length; 
					ciclohij = 0;
				}
}
return respuestahijo;
}
// ******************* hijos *****************************************************************************

//funcion cuenta hijos y valida cantidad
// ******************* hijos conteo **********************************************************************
function vaHijos(caux){
var cantidadhijos;
if (caux == "si"){
	chiquirrines = prompt("Favor ingresar cantidad de hijos (numeros)", "");
	if (chiquirrines > 0){
		cantidadhijos = parseInt(chiquirrines);
	}
}else{cantidadhijos = 0;}
return cantidadhijos;
}
// ******************* hijos conteo **********************************************************************

//Funcion que mide los recargos por edad de asegurado
// ******************* Recargo Asegurado **********************************************************************
function RecASeg(base,Redad){
	var AuxRedad = parseInt(Redad);
	base = parseInt(base);
	if((AuxRedad < 19) ||(AuxRedad > 65)) {alert ("no asegurable");
	Recargo = base * 0;}
	if((AuxRedad >= 19)&&(AuxRedad < 21)){Recargo = base * 0;}
	if((AuxRedad >= 21)&&(AuxRedad < 25)){Recargo = base * 0.01;}
	if((AuxRedad >= 25)&&(AuxRedad < 30)){Recargo = base * 0.02;}
	if((AuxRedad >= 30)&&(AuxRedad < 40)){Recargo = base * 0.05;}
	if((AuxRedad >= 40)&&(AuxRedad < 50)){Recargo = base * 0.08;}
	if((AuxRedad >= 50)&&(AuxRedad < 65)){Recargo = base * 0.12;}
	return Recargo;
}
// ******************* Recargo Asegurado **********************************************************************

//Funcion que mide los recargos por edad de conyuge
// ******************* Recargo Asegurado **********************************************************************
function RecCon(baseC,RedadC){
	var AuxRedadC = parseInt(RedadC);
	baseC = parseInt(baseC);
	if((AuxRedadC < 30)) {Recargoc = baseC * 0.01;}
	if((AuxRedadC >= 30)&&(AuxRedadC < 40)){Recargoc = baseC * 0.02;}
	if((AuxRedadC >= 40)&&(AuxRedadC < 50)){Recargoc = baseC * 0.03;}
	if((AuxRedadC >= 50)&&(AuxRedadC < 70)){Recargoc = baseC * 0.05;}
	if((AuxRedadC >= 30)&&(AuxRedadC < 40)){Recargoc = baseC * 0.05;}
	return Recargoc;
}
// ******************* Recargo Asegurado **********************************************************************